import React, { useState, useContext } from 'react'
import { ShareContext } from './ShareContext';
import {StyledAddShare} from '../styles/Share/StyledAddShare'

const AddShare = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [shares, setShares] = useContext(ShareContext)

  const updateName = (e) => {
    setName(e.target.value)
  }
  const updatePrice = (e) => {
    setPrice(e.target.value)
  }

  const addShare = e => {
    e.preventDefault();
    setShares(prevShares => [...prevShares, { name: name, price: price }])
  }

  return (
    <StyledAddShare>

    <form onSubmit={addShare}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <textarea type="text" name="price" value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
    </StyledAddShare>

  ) 
}

export default AddShare