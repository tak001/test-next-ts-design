import { IFetchSWR } from '@/application/users/useCase';
import { User } from '@/domain/models/users/user';
import { Id } from '@/domain/models/users/vo';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';
import { userRepositoryFacade } from '@/interfaces/repository/user';

// export class FetchSWR implements IFetchSWR {
//   constructor(private readonly userRepository: IUserRepository) {}

//   // TODO: Response type の interface を dataへ置く
//   execute(): { data?: User[]; error: any } {
//     const { data, error } = this.userRepository.useFetchUser();
//     if (!data) {
//       return { data: undefined, error };
//     }

//     const users = data.map((user) => {
//       return new User(user.id, user.name, user.mailAddress);
//     });

//     return { data: users, error };
//   }
// }

export const useFetchUser: IFetchSWR = () => {
  const { data, error } = userRepositoryFacade.useFetchUser();

  const users = data?.map((user) => {
    return new User(user.id, user.name, user.mailAddress);
  });

  return {
    data: users,
    error,
  };
};
