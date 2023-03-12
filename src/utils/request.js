/* eslint-disable camelcase */
import axios from "axios";
import { isEmpty, get } from "lodash";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/v1/",
  responseType: "json",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InNvdXJhYXYgdGVzdF91cGRhdGUgICIsInVzZXJfdXVpZCI6ImRjOTk4ZWRjLTkzY2QtNDVkNC04OTBhLTgzZWRmMmZmNDE5ZCIsImVtYWlsIjoibmdkaEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCRiL3hGQ1p6YVFJN29YOUZLYXc5Qmp1WTBqUlVkdnZGYkJaTG1zQzRxUGNkbHVsUUl0QlYzZSIsInVzZXJfcmlnaHRzIjoiYWRtaW4iLCJnZW5kZXIiOiJtYWxlIiwiY3JlYXRlZEF0IjoiMjAyMi0xMi0xMlQxNzo1ODoxMi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMi0xMi0xMlQxNzo1ODoxMi4wMDBaIiwiaWF0IjoxNjcwODY4MzE1fQ.FtCAdifHY9yHbxxd5-YynhrMYDICY8JzwNqNtifz7AQ`;
  return config;
});

export default function request(options) {
  return axiosInstance(options);
}
