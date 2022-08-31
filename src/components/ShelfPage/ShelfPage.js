import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';


function ShelfPage() {

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
