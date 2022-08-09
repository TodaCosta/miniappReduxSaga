import {put, takeEvery, takeLatest, takeLeading} from 'redux-saga/effects';
import { ASYNC_INCREMENT, ASYNC_DECREMENT, incrementCreator, decrementCreator } from '../store/countReducer';

const delay = (ms) => new Promise(res => setTimeout(res, ms)) //делает задержку - таймаут

function* incrementWorker(){
    yield delay(1000) //ф-ция не вып-ся, пока не вып-ся это асинхронное действие (как async/await)
    yield put(incrementCreator()) //аналог диспатча - передаем action

}

function* decrementWorker(){
    yield delay(1000) 
    yield put(decrementCreator())
}

export function* countWatcher(){
    yield takeLeading(ASYNC_INCREMENT, incrementWorker)
    yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}