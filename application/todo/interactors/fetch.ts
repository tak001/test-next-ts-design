import { IFetch } from '@/application/todo/useCase';
import { SwrResponse } from '@/application/types';
import IRecoilRepository from '@/interfaces/repository/todo/ITodoRepository';
import { Todo } from '@/domain/models/todo/todo';

export class Fetch implements IFetch {
  constructor(private readonly recoilRepository: IRecoilRepository) {}

  execute(): SwrResponse<Todo[]> {
    const { data, error, mutate } = this.recoilRepository.fetchTodoList();

    return { data, error, mutate };
  }
}
