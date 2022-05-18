import { AxiosRequestConfig } from 'axios';
import axiosBase from '@/infrastructure/provider/axiosBase';
import IClient from '@/infrastructure/provider/IClient';
import useSWR, { SWRResponse, Key, Fetcher } from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

export class ProdClient implements IClient {
  post(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.post(url, data, config);
  }

  // TODO: 整備
  put(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.put(url, data, config);
  }

  // TODO: 整備
  get(url: string, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.get(url, config);
  }

  // TODO: 整備
  delete(url: string, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.delete(url, config);
  }

  // TODO: 整備
  useSwr = (
    key: Key,
    _fetcher?: Fetcher,
    config?: PublicConfiguration,
  ): SWRResponse<any, any> => {
    const fetcher = <T>(path: string, queryParams = ''): Promise<T> =>
      axiosBase.get(`${path}${queryParams}`).then((response) => response.data);

    return useSWR(key, fetcher, { ...config });
  };
}

export const prodClient = new ProdClient();
