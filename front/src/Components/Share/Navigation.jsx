import React, { useContext } from 'react'
import {ShareContext} from './ShareContext'

const Navigation = () => {
  const [shares, setShares] = useContext(ShareContext)
  return (
    <nav className="selectedNav">
      <h3>Dev Ed</h3>
      <p>List of Movies: {shares.length}</p>
    </nav>
  )
}

export default Navigation;