import React from 'react'
import styled from 'styled-components'
import { StyledHeader } from './styles/StyledHeader';

const Header = () => {
  return(
    <StyledHeader>
      <div className="header-content">
        Welcome to React Builder.
      </div>
    </StyledHeader>
  )
}

export default Header;