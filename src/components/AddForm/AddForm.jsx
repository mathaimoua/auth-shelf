import {useDispatch} from 'react-redux'
import {useState} from 'react'

function AddForm(){

  const dispatch = useDispatch();

  const [newItem, setNewItem] = useState({desc: '', url: ''});

  // setDescription({desc: desc, url: url})

  const handleSubmit = () => {
    // console.log(newItem)
    dispatch({type: 'ADD_ITEM', payload: newItem})
  }

  const handleDescChange = (event) => {
    setNewItem({...newItem, desc: event.target.value})
  }

  const handleURLChange = (event) => {
    setNewItem({...newItem, url: event.target.value})
  }



  return(
    <div>
      <input type='text' value={newItem.desc} placeholder="description" onChange={handleDescChange}></input>
      <input type='text' value={newItem.url} placeholder="image URL" onChange={handleURLChange}></input>
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  )
}

export default AddForm