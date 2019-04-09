export default {
  namespace: "picker",
  state: {
    filter: [],
    total: 0,
    page: 1,
    pagesize: 20
  },
  reducers: {
    deleteTag(state, action) {
      const {
        payload: { tag }
      } = action;
      return {
        ...state,
        filter: state.filter.filter(item => item.tag != tag)
      };
    },

    updateTag(state, action) {
      // hander add tag
      const add = (key, value, tag, words, page, total, list) => {
        if (!value) {
          return {
            ...state,
            page,
            total,
            list
          };
        }
        return {
          ...state,
          page,
          total,
          list,
          filter: [...state.filter, { key, value, tag, words }]
        };
      };

      // hander modify tag
      const modify = (key, value, tag, words, page, total, list) => {
        return {
          ...state,
          page,
          total,
          list,
          filter: state.filter.map(item => {
            return item.tag === tag ? { key, value, tag, words } : item;
          })
        };
      };

      const {
        payload: { key, value, tag, words, page, total, list }
      } = action;

      let isExist = state.filter.some(item => item.tag === tag);
      return isExist
        ? modify(key, value, tag, words, page, total, list)
        : add(key, value, tag, words, page, total, list);
    }
  },
  effects: {
    *async_updateTag(action, { put, select }) {
      const {
        payload: { key, value }
      } = action;
      // before
      const { filter: pickers, page: index, pagesize: limit } = yield select(
        state => state.picker
      );

      const befores = pickers.reduce((acc, cur) => {
        return Object.assign(acc, { [cur.key]: cur.value });
      }, {});

      // cureent
      const params = {
        ...befores,
        index,
        limit,
        [key]: value // now
      };

      // 1. build query url
      //let query = pickers.map(item => item.key + "=" + item.value).join("&");
      pickers.forEach(element => {});
      let query = Object.keys(params)
        .map(key => key + "=" + params[key])
        .join("&");
      console.log("async_updateTag:", query);

      // 2. fetch
      const { page, total, list } = yield fetch("/api?" + query).then(data =>
        data.json()
      );
      yield put({
        type: "updateTag",
        payload: {
          ...action.payload,
          page,
          total,
          list
        }
      });
    },

    *async_init(action, { put, select }) {
      const { page: index, pagesize: limit } = yield select(
        state => state.picker
      );
      const { page, total, list } = yield fetch(
        `./api?page=${index}&pagesize=${limit}`
      ).then(data => data.json());
      yield put({
        type: "updateTag",
        payload: {
          ...action.payload,
          page,
          total,
          list
        }
      });
    },
    *async_send() {
      console.log("aaaa");
    },

    *async_deleteTag(action, { put, select }) {
      const {
        payload: { tag }
      } = action;
      // before
      let { filter: pickers, page: index, pagesize: limit } = yield select(
        state => state.picker
      );
      pickers = pickers.filter(item => item.tag != tag);
      const befores = pickers.reduce((acc, cur) => {
        return Object.assign(acc, { [cur.key]: cur.value });
      }, {});
      // cureent
      const params = {
        ...befores,
        page: 1,
        pagesize: 20
      };

      // 1. build query url
      //let query = pickers.map(item => item.key + "=" + item.value).join("&");
      pickers.forEach(element => {});
      let query = Object.keys(params)
        .map(key => key + "=" + params[key])
        .join("&");
      console.log("async_updateTag:", query);

      // 2. fetch
      const { page, total, list } = yield fetch("/api?" + query).then(data =>
        data.json()
      );
      yield put({
        type: "updateTag",
        payload: {
          ...action.payload,
          page,
          total,
          list
        }
      });
      yield put({
        type: "deleteTag",
        payload: {
          tag
        }
      });
    }
  }
};
