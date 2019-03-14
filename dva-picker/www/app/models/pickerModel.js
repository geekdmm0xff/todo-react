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
      console.log("state:", state);
      // hander add tag
      const add = (key, value, tag, template) => {
        console.log("add");
        return {
          ...state,
          filter: [...state.filter, { key, value, tag, template }]
        };
      };

      // hander modify tag
      const modify = (key, value, tag, template) => {
        console.log("modify");
        return {
          filter: state.filter.map(item => {
            return item.tag === tag ? { key, value, tag, template } : item;
          })
        };
      };

      let isExist = false;

      state.filter.forEach(item => {
        if (item.tag === tag) {
          isExist = true;
        }
      });
      return isExist
        ? modify(key, value, tag, template)
        : add(key, value, tag, template);
    }
  },
  effects: {}
};
