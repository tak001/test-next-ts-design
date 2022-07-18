import React, { useState } from 'react';
import { todoListActions, todoListGetters } from '@/store/todo';
import { Todo } from '@/domain/models/todo/todo';

export const TodoTemplate = () => {
  const { setTodo } = todoListActions.useSetTodo();
  const todoListState = todoListGetters.useTodoList();
  const [inputData, setInputData] = useState<string>();

  const handleChange = (e: string) => {
    setInputData(e);
  };

  console.log(todoListState.todoList);

  const handleClickButton = () => {
    const newTodo: Todo = new Todo(
      500,
      inputData ? inputData : '',
      'userId',
      false,
    );
    setTodo(newTodo);
  };

  return (
    <>
      {todoListState.todoList &&
        todoListState.todoList.map((item: any) => (
          <p key={item.id}>{item.title}</p>
        ))}
      <div>
        <input type="text" onChange={(e) => handleChange(e.target.value)} />
        <button onClick={handleClickButton}>add</button>
      </div>
    </>
  );
};
