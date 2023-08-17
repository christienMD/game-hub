import axios from "axios";

export default  axios.create({
  baseURL: "https://api.rawg.io/xapi",
  params: {
    key: "bfe85da57eeb46f8b56165ace50b5279",
  },
});
