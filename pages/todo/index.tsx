import { todoListActions } from '@/store/todo';
import { TodoTemplate } from '@/components/templates/todo/todo';

const TodoPage = () => {
  const { fetchTodoList } = todoListActions.useFetchTodoList();
  fetchTodoList();

  return (
    <>
      <TodoTemplate />
    </>
  );
};

export default TodoPage;
