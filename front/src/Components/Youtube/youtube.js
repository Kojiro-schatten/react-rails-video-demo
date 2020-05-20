import axios from "axios";

export const KEY = "AIzaSyAoXJyewoRj0bO9F2KEVMyuNOCoHKo9DVM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
