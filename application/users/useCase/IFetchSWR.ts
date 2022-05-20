import { User } from '@/domain/models/users/user';

// export interface IFetchSWR {
//   // TODO: Response type の interface を dataへ置く
//   execute(): { data?: User[]; error: any };
// }

export interface IFetchSWR {
  // TODO: Response type の interface を dataへ置く
  (): { data?: User[]; error: any };
}
