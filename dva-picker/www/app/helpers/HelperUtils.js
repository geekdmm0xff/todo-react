// convert to query url params
export const mapStateToParam = (key, value) => {
  if (key === "seat") {
    return value.map(item => parseInt(item));
  }
  return value;
};

// convert to state
export const mapParamToState = (key, value) => {
  if (key === "seat") {
    let o = value.map(item => item + "座");
    return o;
  }
  return value;
};
