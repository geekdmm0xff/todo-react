export default {
  namespace: "car",
  state: {
    images: {},
    position: {
      color: "",
      album: null,
      index: 0
    }
  },
  //同步
  reducers: {
    init(state, action) {
      const { result } = action.payload;
      return {
        ...state,
        images: result,
        position: {
          color: Object.keys(result)[0],
          album: "",
          index: 0
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
          album
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
          color
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
