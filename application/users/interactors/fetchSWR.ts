import { IFetchSWR } from '@/application/users/useCase';
import { User } from '@/domain/models/users/user';
import { Id } from '@/domain/models/users/vo';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';

export class FetchSWR implements IFetchSWR {
  constructor(private readonly userRepository: IUserRepository) {}

  execute(): { data?: User[]; error: any } {
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
