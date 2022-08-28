import { createAction, createAsyncAction } from 'typesafe-actions';
import { addTodoData, deleteTodoData, updateTodoData, todoData } from './types';

// export const addTodo = createAction('ADD_TODO')<todoList>;
// export const updateTodo = createAction('UPDATE_TODO')<todoList>;
// export const deleteTodo = createAction('DELETE_TODO')<todoList>;

export const getTodo = createAsyncAction(
    'todo/GET_TODO_REQUEST',
    'todo/GET_TODO_SUCCESS',
    'todo/GET_TODO_FAILURE',
)<void, void, Error>();


export const addTodo = createAsyncAction(
    'todo/ADD_TODO_REQUEST',
    'todo/ADD_TODO_SUCCESS',
    'todo/ADD_TODO_FAILURE',
)<addTodoData, void, Error>();

export const updateTodo = createAsyncAction(
    'todo/UPDATE_TODO_REQUEST',
    'todo/UPDATE_TODO_SUCCESS',
    'todo/UPDATE_TODO_FAILURE',
)<updateTodoData, void, Error>();

export const deleteTodo = createAsyncAction(
    'todo/DELETE_TODO_REQUEST',
    'todo/DELETE_TODO_SUCCESS',
    'todo/DELETE_TODO_FAILURE',
)<deleteTodoData, void, Error>();

