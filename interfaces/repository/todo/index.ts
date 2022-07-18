import { SwrResponse } from '@/application/types';
import IClient from '@/infrastructure/provider/IClient';
import ITodoRepository from '@/interfaces/repository/todo/ITodoRepository';
import { Todo } from '@/domain/models/todo/todo';

export class TodoRepository implements ITodoRepository {
  constructor(private readonly _client: IClient) {}

  fetchTodoList(): SwrResponse<Todo[]> {
    // MEMO: testのため、yarn serve だけで動作する
    const { data, error, mutate } = this._client.useSwr<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos',
    );

    return {
      data,
      error,
    };
  }
}
