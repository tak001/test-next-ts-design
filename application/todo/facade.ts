import { Fetch } from './interactors';
import httpClientFactory from '@/infrastructure/HttpClientFactory';
import IClient from '@/infrastructure/provider/IClient';
import { TodoRepository } from '@/interfaces/repository/todo';

class TodoFactory {
  private _fetch?: Fetch;

  constructor(private readonly _client: IClient) {}

  get fetch() {
    if (!this._fetch) {
      const repository = new TodoRepository(this._client);
      this._fetch = new Fetch(repository);
    }

    return this._fetch;
  }
}

const todoFacade = new TodoFactory(httpClientFactory.getClient());

export default todoFacade;
