import { BASE_URL } from '@/constants/appConstants';
import axios,{AxiosResponse,AxiosRequestConfig} from 'axios';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const _get = <T>(url: string, config?:AxiosRequestConfig):Promise<AxiosResponse<T>> => {
  return apiClient.get<T>(url, config);
};

const _delete = <T>(url: string, config?:AxiosRequestConfig):Promise<AxiosResponse<T>> => {
  return apiClient.delete<T>(url, config);
};

const _put = <T>(url: string, data?:any, config?:AxiosRequestConfig):Promise<AxiosResponse<T>> => {
  return apiClient.put<T>(url, data, config);
};

const _post = <T>(url: string, data?:any, config?:AxiosRequestConfig):Promise<AxiosResponse<T>> => {
  return apiClient.post<T>(url, data, config);
};

export { _get, _delete, _put, _post };
