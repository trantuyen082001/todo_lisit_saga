import { createReducer } from 'typesafe-actions';
import { addTodo, deleteTodo, getTodo, updateTodo } from './actions';


export type ITodoState = Readonly<{
    loading: boolean,
    todoListData: []
}>;

const initialState : ITodoState = {
    loading: false,
    todoListData: []
}


export const todoReducer = createReducer(initialState)

// ---- get todo data -----
    .handleAction(getTodo.request, (state, action) => ({
        ...state,
        loading: true,
        todoListData: [],
    }))
    .handleAction(getTodo.success, (state, action) => ({
        ...state,
        loading: false,
        todoListData: action.payload
    }))
    .handleAction(addTodo.failure, (state, action) => ({
        ...state,
        loading: false
    }))
// ----- Add Todo ----
    .handleAction(addTodo.request, (state, action) => ({
        ...state,
        loading: true,
    }))
    .handleAction(addTodo.success, (state, action) => ({
        ...state,
        loading: false,
        todoListData: [action.payload, ...state.todoListData ]
    }))
    .handleAction(addTodo.failure, (state, action) => ({
        ...state,
        loading: false
    }))
// ---- Update todo ----
    .handleAction(updateTodo.request, (state, action) => ({
        ...state,
        loading: true,
    }))
    .handleAction(updateTodo.success, (state, action) => ({
        ...state,
        loading: false,
        todoListData: action.payload,
    }))
    .handleAction(updateTodo.failure, (state, action) => ({
        ...state,
        loading: false
    }))
// ------ delete todo -----
    .handleAction(deleteTodo.request, (state, action) => ({
        ...state,
        loading: true,
    }))
    .handleAction(deleteTodo.success, (state, action: {payload}) => ({
        ...state,
        loading: false,
        todoListData: state.todoListData.filter(todo => todo.id !== action.payload)
    }))
    .handleAction(deleteTodo.failure, (state, action) => ({
        ...state,
        loading: false
    }))