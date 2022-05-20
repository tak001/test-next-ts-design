import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
// import { SWRResponse, Key, Fetcher } from 'swr';
// import { PublicConfiguration } from 'swr/dist/types';

export default interface IClient {
  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): AxiosPromise<R>;

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): AxiosPromise<R>;

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): AxiosPromise<R>;

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): AxiosPromise<R>;

  // useSwr<T = any>(
  //   key: Key,
  //   fetcher?: Fetcher,
  //   config?: PublicConfiguration,
  // ): SWRResponse<T, any>;
}
