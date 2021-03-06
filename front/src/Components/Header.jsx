import React from "react";
import { StyledHeader } from "./styles/StyledHeader";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <div className="header-left">
          <Link to="/">4U</Link>
        </div>
        <p className="header-center-text">Welcome to React Search Box.</p>
        <div className="header-right">
          <Link to="/movie">MOVIE</Link>
          <Link to="/share">SHARE</Link>
          <Link to="/movie">MOVIE</Link>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
