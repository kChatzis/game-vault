import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4f5f0d0e37814fe0af8826fb7dd4a1b6",
  },
});
