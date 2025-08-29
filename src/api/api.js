import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.VITE_API_BASE_URL}/api`
});

export const improveText = (text, field, model) => API.post("/improve", { text, field, model });
export const fixGrammar = (text, model) => API.post("/fix", { text, model });
