import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NmM5NzUwOTdkNWI5ZTEzMTNkMGE3ZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDMwNTI5MDUsImV4cCI6MTcwMzMxMjEwNX0.-3ZmG4x4M4MyBSr0lBldYtlOlzOP8S2d5hFSPy4eAUo";

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
