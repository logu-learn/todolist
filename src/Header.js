import React from 'react';
import './Header.css';

const Headers = "LOGU";
const Header = (props) => {
  return (
    <h1 className="header">{props.title}</h1>
    )
}

Header.defaultProps ={
   title : "To Do list"
}

export default Header;