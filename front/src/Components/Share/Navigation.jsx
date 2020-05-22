import React, { useContext } from 'react'
import {ShareContext} from './ShareContext'

const Navigation = () => {
  const [shares, setShares] = useContext(ShareContext)
  return (
    <nav className="selectedNav">
      <h3>Congrats! Already {shares.length} are shared!</h3>
    </nav>
  )
}

export default Navigation;