import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWRkYjNjZDI1NWM1NjRmZTlmMjNlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMTMyNTk1NiwiZXhwIjoxNzAxNTg1MTU2fQ.AMiDU6QQx7BekOSql43-Bo8vJERMwCM2VldLTKpYrPY";

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
    access_token: TOKEN
  }
});
