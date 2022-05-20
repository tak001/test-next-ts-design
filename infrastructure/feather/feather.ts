import axiosBase from '../provider/axiosBase';

export const fetcher = <T>(path: string, queryParams = ''): Promise<T> =>
  axiosBase.get(`${path}${queryParams}`).then((response) => response.data);
