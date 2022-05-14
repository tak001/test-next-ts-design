import { IFetchAll } from '@/application/users/useCase/IFetchAll';
import { User } from '@/domain/models/users/user';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';

export class FetchAll implements IFetchAll {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.fetchAll();
    return users.map((user) => {
      return new User(user.id, user.name, user.mailAddress);
    });
  }
}
