import { User } from '@/domain/models/users/user';

export interface IFetchSWR {
  execute(): { data?: User[]; error: any };
}
