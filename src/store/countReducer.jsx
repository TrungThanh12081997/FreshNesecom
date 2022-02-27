const initialValue = {
  count: 0,
};
export function countReducer(state = initialValue, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
  }
  return state;
}
