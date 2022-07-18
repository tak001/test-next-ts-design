import { Todo } from '@/domain/models/todo/todo';
import { SwrResponse } from '../types';
import facade from './facade';

class TodoUseCase {
  fetch(): SwrResponse<Todo[]> {
    const useCase = facade.fetch;
    const result = useCase.execute();
    return result;
  }
}

const todoUseCase = new TodoUseCase();

export default todoUseCase;
