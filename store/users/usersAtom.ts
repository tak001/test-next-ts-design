import { atom } from 'recoil';
import { User } from '@/domain/models/users/user';

export const usersState = atom<User[] | undefined>({
  // globalに一意なキー
  key: 'usersState',
  // 初期値
  default: undefined,
});
