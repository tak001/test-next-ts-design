import { User } from '@/domain/models/users/user';
import { Id } from '@/domain/models/users/vo';
import facade from './facade';

class UserUseCase {
  async findAll(): Promise<User[]> {
    const useCase = facade.findAll;
    const result = await useCase.execute();
    return result;
  }

  async find(id: Id): Promise<User> {
    const useCase = facade.find;
    const result = await useCase.execute(id);
    return result;
  }
}

const userUseCase = new UserUseCase();

export default userUseCase;
