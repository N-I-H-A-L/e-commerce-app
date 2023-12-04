import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmM5NzUwOTdkNWI5ZTEzMTNkMGE3ZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDE2MTU0NTAsImV4cCI6MTcwMTg3NDY1MH0.ggize1zShr7WLw_AYgLZlbnmdwkp_4Zd1XtTjaswACM";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'access_token': TOKEN,
  }
});
