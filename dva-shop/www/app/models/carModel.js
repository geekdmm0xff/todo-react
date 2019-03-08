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
          index: 0
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
          index
        }
      };
    },

    goNext(state, action) {
      const {
        images,
        position: { color, album, index }
      } = state;
      console.log("images:", images);
      console.log("position:", color, album, index);

      let albums = ["center", "detail", "view"].filter(item =>
        images[color].hasOwnProperty(item)
      );
      let colors = Object.keys(images);

      let curTotal = images[color][album].length;
      let curAlbumIndex = albums.indexOf(album);
      let curColorIndex = colors.indexOf(color);

      if (index < curTotal - 1) {
        // 当前图集没到末尾
        return {
          ...state,
          position: {
            ...state.position,
            index: state.position.index + 1
          }
        };
      } else if (curAlbumIndex < albums.length - 1) {
        // 当前图集到末尾，跳转下一图集
        let album = albums[curAlbumIndex + 1];
        return {
          ...state,
          position: {
            ...state.position,
            index: 0,
            album
          }
        };
      } else if (curColorIndex < colors.length - 1) {
        // 所有图集到末尾，颜色更新
        let color = colors[curColorIndex + 1];
        let album = Object.keys(images[color])[0];
        return {
          ...state,
          position: {
            ...state.position,
            index: 0,
            album,
            color
          }
        };
      } else {
        // 弹框到达末尾
        alert("到底啦");
        return state;
      }
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
