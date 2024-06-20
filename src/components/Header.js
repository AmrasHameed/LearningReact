import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const [selectedItem, setSelectedItem] = useState('Home');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li className={selectedItem === 'Home' ? 'selected' : ''}><Link to="/" onClick={() => handleItemClick('Home')}>Home</Link></li>
          <li className={selectedItem === 'About' ? 'selected' : ''}><Link to="/about" onClick={() => handleItemClick('About')}>About us</Link></li>
          <li className={selectedItem === 'Restaurants' ? 'selected' : ''}>Restaurants</li>
          <li className={selectedItem === 'Contact' ? 'selected' : ''}><Link to="/contact" onClick={() => handleItemClick('Contact')}>Contact</Link></li>
          <li className={selectedItem === 'Instamart' ? 'selected' : ''}><Link to="/instamart" onClick={() => handleItemClick('Instamart')}>Instamart</Link></li>
          <li className={selectedItem === 'Cart' ? 'selected' : ''}>Cart</li>
          <li><button className="login" onClick={() => setBtnName(btnName === 'Login' ? 'Logout' : 'Login')}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
