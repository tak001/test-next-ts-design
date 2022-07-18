/* eslint-disable import/no-absolute-path */
import { AxiosRequestConfig } from 'axios';
import { Key, Fetcher } from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
import { USERS, TODO } from '@/infrastructure/Path';
import axiosBase from '@/infrastructure/provider/axiosBase';
import IClient from '@/infrastructure/provider/IClient';
import { objectKeysToCamel } from '@/utils/changeCase';

const result = (data: any) => ({ data });

const wrapPromise = (item: any) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(result(objectKeysToCamel(item)));
    }, 500),
  );

const mockPaths = [
  {
    path: USERS,
    value: require('@/infrastructure/mock/data/users/get/all.ts').default,
  },
  {
    path: TODO,
    value: require('@/infrastructure/mock/data/todo/get/all.ts').default,
  },
];

const getTarget = (path?: string) => {
  return mockPaths.filter((item) => item.path === path);
};

class MockClient implements IClient {
  /**
   * post
   */
  post(path: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
    const lastPath = path.split('/').pop();

    const target = getTarget(lastPath);

    if (target.length !== 0) {
      return wrapPromise(target[0].value);
    }

    return axiosBase.post(path, data, config);
  }

  // TODO: 整備
  put(path: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    const lastPath = path.split('/').pop();
    const target = getTarget(lastPath);

    if (target.length !== 0) {
      return wrapPromise(target[0].value);
    }

    return axiosBase.put(path, data, config);
  }

  // TODO: 整備
  get(path: string, config?: AxiosRequestConfig): Promise<any> {
    // FIXME:
    const splitPath = path.split('/');
    const existRootParams = splitPath.length > 3;
    const rootParams = existRootParams ? splitPath.slice(-1)[0] : '';

    const lastPath = existRootParams
      ? splitPath.splice(2, 1)[0]
      : splitPath.pop();
    const target = getTarget(lastPath);

    if (target.length === 0) {
      return axiosBase.get(path, config);
    }

    if (rootParams) {
      const id = rootParams ? Number(rootParams) : 0;
      const obj = target[0].value.data.find((item: any) => item.id === id);
      return wrapPromise({ data: obj });
    }
    return wrapPromise(target[0].value);
  }

  // TODO: 整備
  delete(path: string, config?: AxiosRequestConfig): Promise<any> {
    const lastPath = path.split('/').pop();
    const target = getTarget(lastPath);

    if (target.length !== 0) {
      return wrapPromise(target[0].value);
    }

    return axiosBase.delete(path, config);
  }

  // TODO: 整備
  useSwr = (
    key: Key,
    _fetcher?: Fetcher,
    _config?: PublicConfiguration,
  ): any => {
    const lastPath = typeof key === 'string' ? key.split('/').pop() : '';
    const target = getTarget(lastPath);

    // MEMO: SWRではないけど仕方なし、挙動が実際とは違うので注意
    if (target.length !== 0) {
      return { data: objectKeysToCamel(target[0].value), error: undefined };
    }
  };
}

export const mockClient = new MockClient();
