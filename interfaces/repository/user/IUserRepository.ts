import { User } from '@/domain/models/users/user';
import { Id } from '@/domain/models/users/vo';
import { SwrResponse } from '@/application/types';

export default interface IUserRepository {
  fetchAll(): Promise<User[]>;
  fetch(id: Id): Promise<User>;
  fetchSWR(): SwrResponse<User[]>;
}
