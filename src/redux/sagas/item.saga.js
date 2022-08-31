// import axios from 'axios';
// import { put, takeLatest } from 'redux-saga/effects';

// // worker Saga: will be fired on "FETCH_USER" actions
// function* addItem(action) {
//   try {
//     yield axios.post('/api/shelf', action.payload)
//     yield put({type: 'GET_ITEMS'})
//   } catch (error) {
//     console.log('User get request failed', error);
//   }
// }

// function* itemSaga() {
//   yield takeLatest('ADD_ITEM', addItem);
// }

// export default itemSaga;
