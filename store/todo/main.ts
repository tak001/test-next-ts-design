import { Todo } from '@/domain/models/todo/todo';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import recoilUseCase from '@/application/todo';
import { TodoListActions, TodoListGetters, TodoListState } from './types';
import { RECOIL_ATOMS_KEYS } from '../keys';
import { useCallback } from 'react';

// ------------ ここから stateの実装 ------------
/**
 * state の実装
 * グローバルに一意の key を指定
 * state の初期値を設定
 * state は絶対に export しない
 */
const todoListState = atom<TodoListState>({
  key: RECOIL_ATOMS_KEYS.TODO_STATE,
  default: {
    todoList: [],
  },
});
// ------------ stateの実装ここまで ------------

// ------------ ここから getterの実装 ------------
/**
 * getter的役割 の実装
 */
const useTodoList = () => {
  return useRecoilValue(todoListState);
};

export const todoListGetters: TodoListGetters = {
  useTodoList,
};

// ------------ getterの実装ここまで ------------

// ------------ ここから Action実装 ------------
// カスタムフックとして定義
const useFetchTodoList = () => {
  const setState = useSetRecoilState(todoListState);
  const { data } = recoilUseCase.fetch();

  const fetchTodoList = useCallback(() => {
    setState(() => {
      if (!data) {
        return {
          todoList: [],
        };
      }
      return {
        todoList: data,
      };
    });
  }, [data, setState]);

  // TodoListState の保持している state が複数ある場合
  // const fetchTodoList = useCallback(() => {
  //   setState((prev) => {
  //     if (!data) {
  //       return {
  //         todoList: [],
  //       };
  //     }
  //     return {
  //       ...prev,
  //       todoList: data,
  //     };
  //   });
  // }, [data, setState]);

  return { fetchTodoList };
};

/** Todoを追加 */
const useSetTodo = () => {
  const setState = useSetRecoilState(todoListState);

  // 使用時に引数がある場合は、useCallbackの第一引数へ記述
  const setTodo = useCallback(
    (todo: Todo) => {
      setState((prev) => {
        return {
          todoList: [...prev.todoList, todo],
        };
      });
    },
    [setState],
  );

  // TodoListState の保持している state が複数ある場合
  // const setTodo = useCallback(
  //   (todo: Todo) => {
  //     setState((prev) => {
  //       return {
  //         ...prev,
  //         todoList: [...prev.todoList, todo],
  //       };
  //     });
  //   },
  //   [setState],
  // );

  return { setTodo };
};

/** 例：TodoをUpdate */
// const useUpdateTodoList = () => {
//   const todoList = useTodoList();

//   const updateTodoList = async () => {
//     await recoilUseCase.update(todoList);
//     useFetchTodoList();
//   }

//   return { updateTodoList };
// };

export const todoListActions: TodoListActions = {
  useFetchTodoList,
  useSetTodo,
};
// ------------ Actionの実装ここまで ------------
