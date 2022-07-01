import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-lg pt-2 pb-2">
            <div className="container">
                <Link className="navbar-brand text-light fs-2" to="/">Diary</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-light ms-5" aria-current="page" to="/premium">Premium</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light ms-5" aria-current="page" to="/Support">Support</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light ms-5" aria-current="page" to="/download">Download</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light ms-5" aria-current="page" to="/signup">SignUp</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;