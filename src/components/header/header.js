import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/profile_pics.png';

const Header = () => (
  <div className="main-header">
    <h2>BookStore CMS </h2>
    <ul>
      <li><Link to="/">Books</Link></li>
      <li><Link to="/category">Category</Link></li>
    </ul>
    <img src={logo} alt="Logo" className="img-pics" />
  </div>
);

export default Header;
