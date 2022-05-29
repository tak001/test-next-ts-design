import { selector } from 'recoil';
import { User } from '@/domain/models/users/user';
// import userUseCase from '@/application/users';
import { usersState } from './usersAtom';

export const usersSelector = selector<User[]>({
  // globalに一意なキー
  key: 'usersSelector',
  // get: async ({ get }) => {
  //   const response = await userUseCase.findAll();
  //   return response;
  // },
  get: async ({ get }) => {
    return get(usersState);
  },
});
