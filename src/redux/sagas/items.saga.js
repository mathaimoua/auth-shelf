import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getItems() {
    try{
        const response = yield axios.get('/api/shelf')
        console.log('response.data:', response.data)
        yield put ({
            type: 'SET_ITEMS',
            payload: response.data
        })
    }
    catch (error) {
        console.log('User getItems failed', error);
    }
}

function* itemSaga() {
    yield takeLatest('GET_ITEMS', getItems)
}

export default itemSaga