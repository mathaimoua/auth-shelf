import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ShelfPage() {

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_ITEMS'
    })
  }, [])

  const items = useSelector(store => store.items)

  // const deleteItem = (itemID) => {
  //   // might have to loop but i dont think so?
  //   if (user.id === itemID) {
  //     <button onClick={() => handleDelete()}>delete</button>
  //   }
  // }

  return (
    <>
    <div className="container">
      <h2>Shelf</h2>
      {items.map(item => {
        return (
          <div>
            <p key={item.id}>{item.description}</p>
            <img src={item.image_url} />
            {/* {deleteItem(item.user_id)} */}
          </div>
        )
      })}
      <p>All of the available items can be seen here.</p>
    </div>
    </>
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
