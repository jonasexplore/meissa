import axios from "axios";
import { env } from "config/env";

const api = axios.create({
  baseURL: env.baseUrl,
});

export { api };
