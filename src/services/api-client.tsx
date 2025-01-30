import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "833488d550634f7294f17f00abd46545",
  },
});
