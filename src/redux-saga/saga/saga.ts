import { addTodo, deleteTodo, updateTodo, getTodo } from './../actions';
import {call, put, take, takeLatest} from 'redux-saga/effects'
import { getTodoDatas } from '../../api/todoApi'

function* getTodoData(): any {
    try {
        const data = yield call(getTodoDatas);
        console.log(data.data)
        yield put(getTodo.success(data.data))
    } catch (error) {
        console.log("Fail to fecth API", error)
    }
}

function* addTodoSaga(action: any):any {
    try {
        yield put(addTodo.success(action.payload))
    } catch (error) {
        console.log('Fail to feact add todo data', error)
    }
}

function* updateTodoSaga(action: any):any {
    try {
        const data = yield call(getTodoDatas);
        yield put(updateTodo.success(data))
    } catch (error) {
        console.log('Fail to feact update todo data', error)
    }
}

function* deleteTodoSaga(action: any):any {
    try {
        yield put(deleteTodo.success(action.payload))
    } catch (error) {
        console.log('Fail to feact deleted todo data', error)
    }
}

export default function todoSaga() {
    return [
        takeLatest(getTodo.request, getTodoData),
        takeLatest(addTodo.request, addTodoSaga),
        takeLatest(updateTodo.request, updateTodoSaga),
        takeLatest(deleteTodo.request, deleteTodoSaga),
    ]
}