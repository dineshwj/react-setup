import { get, post } from "axios";

const API_URL = "";
const API_URL_LIVE = "";

var api = {
  home() {
    let url = `${API_URL}/home.json?q=1`;
    return get(url).then(res => res.json());
  }
};

module.exports = api;
