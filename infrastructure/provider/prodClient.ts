import { AxiosRequestConfig } from 'axios';
import axiosBase from '@/infrastructure/provider/axiosBase';
import IClient from '@/infrastructure/provider/IClient';
import useSWR, { SWRResponse, Key, Fetcher } from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
import { fetcher } from '@/infrastructure/fetcher';

export class ProdClient implements IClient {
  post(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.post(url, data, config);
  }

  put(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.put(url, data, config);
  }

  get(url: string, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.get(url, config);
  }

  delete(url: string, config?: AxiosRequestConfig): Promise<any> {
    return axiosBase.delete(url, config);
  }

  useSwr = (
    key: Key,
    _fetcher?: Fetcher,
    config?: PublicConfiguration,
  ): SWRResponse<any, any> => {
    return useSWR(key, fetcher, { ...config });
  };
}

export const prodClient = new ProdClient();
