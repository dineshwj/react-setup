import { RBS_ACTION } from "../constants";

const member = (state = {}, action) => {
  switch (action.type) {
    case RBS_ACTION:
      return action.payload;
    default:
      return state;
  }
};

export default member;
