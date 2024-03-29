/** utils */
import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:9000",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
