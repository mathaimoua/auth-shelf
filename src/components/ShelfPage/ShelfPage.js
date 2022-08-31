import React from 'react';

function ShelfPage() {

  const deleteItem(item.id)

  return (
    <div className="container">
      <h2>Shelf</h2>
      {items.map(item => {
        return (
          <p>{item}</p>
          {deleteItem(item.id)}
        )
      })}
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
