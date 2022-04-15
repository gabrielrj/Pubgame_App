import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../Context/AuthContext';

export const Navbar = () => {

    const [image] = useState(localStorage.getItem('image'));
    const [nickname] = useState(localStorage.getItem('nickname'));

    const { handleLogout } = useContext(Context);

    const dropdownUserNavbar = async () => {
        document.getElementById("dropNavbarUser").classList.toggle("dropdown-menu-action");
    }

    const barsSidebar = async () => {
        document.getElementById("barsSidebar").classList.toggle("sidebar-active");
    }

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="bars" onClick={() => barsSidebar()}>
                    <i className="fas fa-bars"></i>
                </div>
                <img src="../../public/favicon.png" alt="pub" className="logo" />
            </div>
            <div className="navbar-content">

                <div className="avatar">
                    <span onClick={() => dropdownUserNavbar()} className="drop-nav-bar-user">
                        <img src={image} alt={nickname} />
                    </span>
                    <div id="dropNavbarUser" className="dropdown-menu setting">
                        <div className="item">
                            <Link to="/game/auth/players/view-profile">
                                <span className="fas fa-user"></span> Profile
                            </Link>
                        </div>
                        <div className="item" onClick={handleLogout}>
                            <span className="fas fa-sign-out-alt"></span> Exit
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}