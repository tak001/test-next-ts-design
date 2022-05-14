import { User } from '@/domain/models/users/user';
import { Id } from '@/domain/models/users/vo';
import factory from './factory';

class UserUseCase {
  async findAll(): Promise<User[]> {
    const useCase = factory.findAll;
    const result = await useCase.execute();
    return result;
  }

  async find(id: Id): Promise<User> {
    const useCase = factory.find;
    const result = await useCase.execute(id);
    return result;
  }
}

const userUseCase = new UserUseCase();

export default userUseCase;
