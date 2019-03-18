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
  effects: {}
};
