import React from 'react'
import { StyledFooter } from "./styles/StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="contents">

      <footer>
        <div>
          <div className="copyright">
            <p>© 2020 - KojiroKageyama</p>
          </div>
          <div className="sns">
            <a href="#" className="fb"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></a>
            <a href="#" className="tw"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></a>
            <a href="#" className="insta"><i className="fa fa-instagram fa-fw" aria-hidden="true"></i></a>
          </div>
        </div>
      </footer>
      </div>
    </StyledFooter>
  ) 
}

export default Footer;