import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMoneyCheckAlt, faWallet, faCreditCard, faBell, faCommentDots, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span>CREDIT APP</span>
      </div>
      <ul className="navbar-menu">
        <li>
          <FontAwesomeIcon icon={faHome} className="navbar-icon" />
          <span>Home</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faMoneyCheckAlt} className="navbar-icon" />
          <span>Payments</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faWallet} className="navbar-icon" />
          <span>Budget</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCreditCard} className="navbar-icon" />
          <span>Card</span>
        </li>
      </ul>
      <ul className="navbar-right">
        <li>
          <FontAwesomeIcon icon={faBell} className="navbar-icon" />
        </li>
        <li>
          <FontAwesomeIcon icon={faCommentDots} className="navbar-icon" />
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} className="navbar-icon" />
          <span>User</span>
        </li>
        <li className="dropdown">
          <span>&#9662;</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
