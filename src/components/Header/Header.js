import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.jpg';
import logo from '../../images/icons/logo.png';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    setLoggedInUser(loggedInUser);// extra line, just for using it

    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt="" />
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        {/* this will be orders */}
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/deals">Deals</Link>
                    </li>
                    <li>
                        {
                            loggedInUser.name ? <h5 style={{color: 'gold'}}> {loggedInUser.name} </h5> : <Link to="/login">Login</Link>
                        }
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                <h1>BOOK WORLD</h1>
                <h3>An online shop for BOOKS!!</h3>
            </div>
        </div>
    );
};

export default Header;