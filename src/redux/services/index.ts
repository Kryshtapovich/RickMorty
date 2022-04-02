import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://rickandmortyapi.com/api/";

const responseData = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string, params = {}) =>
    axios.get<T>(url, { params }).then(responseData),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseData),
  put: <T>(url: string, body: {}, params: {}) =>
    axios.put<T>(url, body, { params }).then(responseData),
  delete: <T>(url: string, params: {}) =>
    axios.delete<T>(url, { params }).then(responseData),
};

export function fixDate<T extends { created: string }>(obj: T) {
  return { ...obj, created: new Date(obj.created).toLocaleDateString("en-Us") };
}

export default requests;
