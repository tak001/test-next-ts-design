// import { User } from '@/domain/models/users/user';
// import { Id } from '@/domain/models/users/vo';
// import { userRepositoryFacade } from './facade';
// import facade from './facade';
import { fetch, fetchAll, useFetchUser } from '@/application/users/interactors';

// class UserUseCase {
//   async findAll(): Promise<User[]> {
//     const useCase = facade.findAll;
//     const result = await useCase.execute();
//     return result;
//   }

//   async find(id: Id): Promise<User> {
//     const useCase = facade.find;
//     const result = await useCase.execute(id);
//     return result;
//   }

//   findSWR(): { data?: User[]; error: any } {
//     const useCase = facade.findSWR;
//     const result = useCase.execute();
//     return result;
//   }
// }

// const userUseCase = new UserUseCase();

// export default userUseCase;

export const userUseCase = {
  fetch,
  fetchAll,
  useFetchUser,
};
