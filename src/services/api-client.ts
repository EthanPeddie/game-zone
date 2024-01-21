import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5af7ad1ea14f48f98bf4a2f95e8339fb",
  },
});
