export default {
  namespace: "car",
  state: {
    images: null,
    position: {
      color: null,
      album: null,
      index: 0
    }
  },
  //同步
  reducers: {
    init(state, action) {
      const { result } = action.payload;
      const color = Object.keys(result)[0];
      return {
        ...state,
        images: result,
        position: {
          ...state.position,
          color,
          album: Object.keys(result[color])[0]
        }
      };
    },

    updateAlbum(state, action) {
      const {
        payload: { album }
      } = action;
      return {
        ...state,
        position: {
          ...state.position,
          album,
          index: 0,
        }
      };
    },

    updateColor(state, action) {
      const {
        payload: { color }
      } = action;
      return {
        ...state,
        position: {
          ...state.position,
          color,
          album: Object.keys(state.images[color])[0]
        }
      };
    },

    updateIndex(state, action) {
      const {
        payload: { index }
      } = action;
      return {
        ...state,
        position: {
          ...state.position,
          index,
        }
      };
    }
  },
  //异步
  effects: {
    *init_aync(action, { call, put }) {
      //写异步语句
      const { result } = yield fetch("/cars").then(data => data.json());
      //put表示
      yield put({ type: "init", payload: { result } });
    }
  }
};
