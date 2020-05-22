import React from 'react'
import { StyledChangeShare } from '../styles/Share/StyledChangeShare';

const ChangeShare = ({link, text}) => {
  return (
    <StyledChangeShare>
      <div className="quoteField">
        <blockquote>
          <a href={link}>{link}</a>
        </blockquote>
        <div className="author">
          <p>{text}<span>UserName</span></p>
        </div>
      </div>
    </StyledChangeShare>
  )
}

export default ChangeShare;