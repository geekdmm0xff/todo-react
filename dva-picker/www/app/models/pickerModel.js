import * as templateHelper from "./templateHelper";

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
        payload: { key, value, tag, template }
      } = action;
      // hander add tag
      const add = (key, value, tag, template) => {
        return {
          ...state,
          filter: [...state.filter, { key, value, tag, template }]
        };
      };

      // hander modify tag
      const modify = (key, value, tag, template) => {
        return {
          filter: state.filter.map(item => {
            return item.tag === tag ? { key, value, tag, template } : item;
          })
        };
      };

      let isExist = state.filter.some(item => item.tag === tag);
      return isExist
        ? modify(key, value, tag, template)
        : add(key, value, tag, template);
    }
  },
  effects: {}
};
