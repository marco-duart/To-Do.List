import axios from "axios"
// API no Render: "https://api-todo-list-3bxl.onrender.com/" ou API emulada pelo json server: "http://localhost:3000/""
const APIUrl = "https://api-todo-list-3bxl.onrender.com/"

export default axios.create({
  baseURL: APIUrl,
  headers: {
    "Content-Type": "application/json",
  },
});