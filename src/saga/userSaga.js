import {put, takeEvery, call} from 'redux-saga/effects'; //call возвр. данные, кот.прилетают в промисе/put - аналог диспатча
import { FETCH_USERS, setUsers } from '../store/userReducer';


const fetchUserFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10') //fetch возвращает промис

function* fetchUserWorker(){
    const data = yield call(fetchUserFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setUsers(json))
}


export function* userWatcher(){
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}