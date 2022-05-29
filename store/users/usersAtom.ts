import { atom } from 'recoil';
import { User } from '@/domain/models/users/user';

export const usersState = atom<User[]>({
  // globalに一意なキー
  key: 'usersState',
  // 初期値
  default: [],
  // default: selector({
  //   key: 'usersSelector',
  //   get: async () => {
  //     const response = await userUseCase.findAll();
  //     return response;
  //   },
  // }),
});
