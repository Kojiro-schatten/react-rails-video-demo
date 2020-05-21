import React, { useContext } from 'react'
import ChangeShare from './ChangeShare';
import { ShareContext } from './ShareContext';

const SelectShare = () => {
  const [shares, setShares] = useContext(ShareContext)

  return (
    <div className="selected">
      {shares.map(share => (
        <ChangeShare name={share.name} price={share.price} key={share.id} />
        ))}
    </div>
  )
}

export default SelectShare;