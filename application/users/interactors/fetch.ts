import { IFetch } from '@/application/users/useCase';
import { User } from '@/domain/models/users/user';
import { Id } from '@/domain/models/users/vo';
import IUserRepository from '@/interfaces/repository/user/IUserRepository';

export class Fetch implements IFetch {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(id: Id): Promise<User> {
    const user = await this.userRepository.fetch(id);
    return new User(user.id, user.name, user.mailAddress);
  }
}
