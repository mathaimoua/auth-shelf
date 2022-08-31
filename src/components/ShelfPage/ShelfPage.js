import React from 'react';
import AddForm from '../AddForm/AddForm';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function ShelfPage() {

 const store = useSelector(store => store.user)

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_ITEMS'
    })
  }, [])


  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {store.id && <AddForm />}
    </div>
  );
}

export default ShelfPage;


// to do: 
// get information from DB
  // make a getRoute
// put into reducer
  // make a reducer
// map through it
// display it on DOM.  
