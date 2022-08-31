import React from 'react';
import { useReducer } from 'react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function ShelfPage() {

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_ITEMS'
    })
  }, [])

  const deleteItem = (itemID) => {
    // might have to loop but i dont think so?
    if (user.id === itemID) {
      <button onClick={() => handleDelete()}>delete</button>
    }
  }

  return (
    <div className="container">
      <h2>Shelf</h2>
      {items.map(item => {
        return (
          <div>
            <p>{item}</p>
            {deleteItem(item.user_id)}
          </div>
        )
      })}
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
