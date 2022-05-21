import { IFetchSWR } from '@/application/users/useCase';
import { User } from '@/domain/models/users/user';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';
import { SwrResponse } from '@/application/types';

export class FetchSWR implements IFetchSWR {
  constructor(private readonly userRepository: IUserRepository) {}

  execute(): SwrResponse<User[]> {
    const { data, error } = this.userRepository.fetchSWR();
    if (!data) {
      return { data: undefined, error };
    }

    const users = data.map((user) => {
      return new User(user.id, user.name, user.mailAddress);
    });

    return { data: users, error };
  }
}
