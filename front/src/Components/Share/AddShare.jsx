import React, { useState, useContext } from 'react'
import { ShareContext } from './ShareContext';
import {StyledAddShare} from '../styles/Share/StyledAddShare'

const AddShare = () => {
  const [link, setLink] = useState('');
  const [text, setText] = useState('');
  const [shares, setShares] = useContext(ShareContext)

  const updateLink = (e) => {
    setLink(e.target.value)
  }
  const updateText = (e) => {
    setText(e.target.value)
  }

  const addShare = e => {
    e.preventDefault();
    setShares(prevShares => [...prevShares, { link: link, text: text }])
  }

  return (
    <StyledAddShare>

    <form onSubmit={addShare}>
      <input type="text" link="link" value={link} onChange={updateLink} placeholder="https://www..." />
      <textarea type="text" name="text" value={text} onChange={updateText} placeholder="What is your opinion?" />
      <button>Submit</button>
    </form>
    </StyledAddShare>

  ) 
}

export default AddShare