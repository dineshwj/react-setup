import { RBS_ACTION } from "../constants";

export function getMember() {
  return function(dispatch) {
    return dispatch({
      type: RBS_ACTION,
      payload: { name: "Gaurav Jassal", email: "gauravity@pm.me" }
    });
  };
}
