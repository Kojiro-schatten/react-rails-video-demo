import React from 'react'

const ChangeShare = ({link, text}) => {
  return (
    <div>
      <a href={link}>{link}</a>
      <p>{text}</p>
    </div>
  )
}

export default ChangeShare;