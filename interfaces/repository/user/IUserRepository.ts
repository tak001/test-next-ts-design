import { User } from '@/domain/models/users/user';
import { Id } from '@/domain/models/users/vo';

export default interface IUserRepository {
  fetchAll(): Promise<User[]>;
  fetch(id: Id): Promise<User>;
  // MEMO: for Operation check
  // TODO: Response type の interface をtypeへ定義する
  useFetchUser(): { data?: User[]; error: any };
}
