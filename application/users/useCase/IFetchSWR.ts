import { User } from '@/domain/models/users/user';
import { SwrResponse } from '@/application/types';

export interface IFetchSWR {
  execute(): SwrResponse<User[]>;
}
