import axios from "axios";

const API = axios.create({
  baseURL: "https://c3de815a8b1f.ngrok-free.app/api"
});

export const improveText = (text, field, model) => API.post("/improve", { text, field, model });
export const fixGrammar = (text, model) => API.post("/fix", { text, model });
  