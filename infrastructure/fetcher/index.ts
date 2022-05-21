import axiosBase from '@/infrastructure/provider/axiosBase';

export const fetcher = <T>(path: string): Promise<T> =>
  axiosBase.get(path).then((response) => response.data);
