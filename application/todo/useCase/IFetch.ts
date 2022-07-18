import { SwrResponse } from "@/application/types";
import { Todo } from '@/domain/models/todo/todo';

export interface IFetch {
  execute(): SwrResponse<Todo[]>;
}
