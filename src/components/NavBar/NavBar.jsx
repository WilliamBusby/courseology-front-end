import React from 'react';
import "./NavBar.scss";
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h2>_courseology</h2>
      </Link>
      <div className="navbar__links">
        <Link to="/course/add">
          <h4>Add Course</h4>  
        </Link>
        <Link to="/course/delete">
          <h4>Delete Course</h4>  
        </Link>
      </div>
    </div>
  )
}

export default NavBar