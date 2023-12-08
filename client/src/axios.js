import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmM5NzUwOTdkNWI5ZTEzMTNkMGE3ZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDIwNDUwNTksImV4cCI6MTcwMjMwNDI1OX0.y8-gBz85H_eexY7_uru75jwMUUc_9JyiHCymJsD3BUM";

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
