// import { Fetch, FetchAll, FetchSWR } from './interactors';
// import httpClientFactory from '@/infrastructure/HttpClientFactory';
// import IClient from '@/infrastructure/provider/IClient';
// import { UserRepository } from '@/interfaces/repository/user';
// import { userRepository } from '@/interfaces/repository/user';

// class UserFactory {
//   private _findAll?: FetchAll;
//   private _find?: Fetch;
//   private _findSWR?: FetchSWR;

//   constructor(private readonly _client: IClient) {}

//   get findAll() {
//     if (!this._findAll) {
//       const repository = new UserRepository(this._client);
//       this._findAll = new FetchAll(repository);
//     }

//     return this._findAll;
//   }

//   get find() {
//     if (!this._find) {
//       const repository = new UserRepository(this._client);
//       this._find = new Fetch(repository);
//     }

//     return this._find;
//   }

//   get findSWR() {
//     if (!this._findSWR) {
//       const repository = new UserRepository(this._client);
//       this._findSWR = new FetchSWR(repository);
//     }

//     return this._findSWR;
//   }
// }

// const facade = new UserFactory(httpClientFactory.getClient());

// export default facade;

// not used
export {}
