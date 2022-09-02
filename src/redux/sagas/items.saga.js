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

function* addItem(action) {
    try {
      yield axios.post('/api/shelf', action.payload)
      yield put({type: 'GET_ITEMS'})
    } catch (error) {
      console.log('User get request failed', error);
    }
  }

  function* deleteItem(action) {
    try {
      yield axios.delete(`/api/shelf/${action.payload}`)
      yield put ({type: 'GET_ITEMS'})
    } catch (err) {
      console.error('error in delete', err)
    }
  }

function* itemSaga() {
    yield takeLatest('GET_ITEMS', getItems)
    yield takeLatest('ADD_ITEM', addItem);
    yield takeLatest('DELETE', deleteItem)
}

export default itemSaga