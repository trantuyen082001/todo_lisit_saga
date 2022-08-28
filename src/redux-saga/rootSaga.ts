import {all} from 'redux-saga/effects'


import todoSaga from './saga/saga';

export default function* root() {
    yield all([
        ...todoSaga()
    ])
}