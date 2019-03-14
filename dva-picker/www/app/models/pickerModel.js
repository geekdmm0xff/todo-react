const template1 = (value, tag) => `${tag}: ${value}`;

const template2 = (value, tag) => `${tag}: ${value[0]}-${value[1]}万`;

const template3 = (value, tag) => tag + ": " + value.join(" ");

export default {
  namespace: "picker",
  state: {
    filter: [
      {
        key: "carbrand",
        value: "奥迪",
        tag: "品牌",
        template: template1 // ${tag}:${value}
      },
      {
        key: "system",
        value: "A3",
        tag: "车系",
        template: template1
      },
      {
        key: "price",
        value: [10, 20],
        tag: "价格",
        template: template2 // ${tag}:${value[0]}-${value[1]}万
      },
      {
        key: "cartype",
        value: ["小型车", "中型车", "豪华车"],
        tag: "车型",
        template: template3 // ${tag}:${value[0]} ${value[1]} ...
      },
      {
        key: "seats",
        value: "座位",
        tag: "4座",
        template: template1
      }
    ]
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
    }
  },
  effects: {}
};
