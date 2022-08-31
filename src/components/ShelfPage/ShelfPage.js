import React from 'react';
import AddForm from '../AddForm/AddForm';
import {useSelector} from 'react-redux'

function ShelfPage() {

  const store = useSelector(store => store.user)

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {store.id && <AddForm />}
    </div>
  );
}

export default ShelfPage;
