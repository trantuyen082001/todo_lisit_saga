import { History } from "history";
import { combineReducers } from "redux";
import { todoReducer, ITodoState } from './reducer';

export interface IRootState { 
    todoList: ITodoState
}

// const createRootReducer = (history: History) => {
//     combineReducers<IRootState> ({
//         todoList: todoReducer
//     })
// }

const rootReducer = combineReducers<IRootState>({
    todoList: todoReducer
})


export default rootReducer;