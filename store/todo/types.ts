import { Todo } from '@/domain/models/todo/todo';

/** State の型 */
export type TodoListState = {
  todoList: Todo[];
};

/** Getters の型 */
export type TodoListGetters = {
  useTodoList: () => TodoListState;
};

/** Action の型 */
export type TodoListActions = {
  useFetchTodoList: () => {
    fetchTodoList: () => void;
  };
  useSetTodo: () => {
    setTodo: (todo: Todo) => void;
  };
};
