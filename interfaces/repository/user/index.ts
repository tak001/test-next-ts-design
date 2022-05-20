import { User } from '@/domain/models/users/user';
import { Id } from '@/domain/models/users/vo';
import { API, USERS } from '@/infrastructure/Path';
import IClient from '@/infrastructure/provider/IClient';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';
import httpClientFactory from '@/infrastructure/HttpClientFactory';
import { fetcher } from '@/infrastructure/feather/feather';
import useSWR from 'swr';

// export class UserRepository implements IUserRepository {
//   constructor(private readonly _client: IClient) {}

//   async fetchAll(): Promise<User[]> {
//     const { data } = await this._client.get<User[]>(API + USERS);
//     return data.data;
//   }

//   async fetch(id: Id): Promise<User> {
//     const { data } = await this._client.get<User>(API + `${USERS}/${id}`);
//     return data.data;
//   }

//   fetchSWR(): { data?: User[]; error: any } {
//     const { data, error } = this._client.useSwr<User[]>(API + USERS);

//     return {
//       data,
//       error,
//     };
//   }
// }

export const userRepository = (client: IClient): IUserRepository => {
  const fetchAll = async (): Promise<User[]> => {
    const { data } = await client.get<User[]>(API + USERS);
    return data.data;
  };

  const fetch = async (id: Id): Promise<User> => {
    const { data } = await client.get<User>(API + `${USERS}/${id}`);
    return data.data;
  };

  const useFetchUser = (): { data?: User[]; error: any } => {
    const { data, error } = useSWR<User[]>(API + USERS, fetcher);

    return {
      data,
      error,
    };
  };

  return {
    fetchAll,
    fetch,
    useFetchUser,
  };
};

export const userRepositoryFacade = userRepository(
  httpClientFactory.getClient(),
);
