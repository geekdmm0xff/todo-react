export default {
  namespace: "picker",
  state: {
    filter: []
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
      const {
        payload: { key, value, tag, words }
      } = action;
      // hander add tag
      const add = (key, value, tag, words) => {
        return {
          ...state,
          filter: [...state.filter, { key, value, tag, words }]
        };
      };

      // hander modify tag
      const modify = (key, value, tag, words) => {
        return {
          filter: state.filter.map(item => {
            return item.tag === tag ? { key, value, tag, words } : item;
          })
        };
      };

      let isExist = state.filter.some(item => item.tag === tag);
      return isExist
        ? modify(key, value, tag, words)
        : add(key, value, tag, words);
    }
  },
  effects: {
    *async_updateTag(action, { call, put, select }) {
      const {
        payload: { key, value }
      } = action;
      // before
      const pickers = yield select(state => state.picker.filter);
      const befores = pickers.reduce((acc, cur) => {
        return Object.assign(acc, { [cur.key]: cur.value });
      }, {});
      // cureent
      const params = {
        ...befores,
        page: 1,
        pagesize: 20,
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
    }
  }
};
