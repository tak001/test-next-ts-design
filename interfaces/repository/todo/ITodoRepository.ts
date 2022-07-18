import { SwrResponse } from '@/application/types';
import { Todo } from '@/domain/models/todo/todo';

export default interface IRecoilRepository {
  fetchTodoList(): SwrResponse<Todo[]>;
}
