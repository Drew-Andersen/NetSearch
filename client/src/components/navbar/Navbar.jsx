import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';
import Auth from '../../utils/auth';

export default function Navbar() {
    const currentPage = useLocation().pathname;
    const navigate = useNavigate();

    return (
        <>
            <nav className='flex'>
                <div className="flex">
                    <h1 className='name-logo'>NetSearch</h1>
                </div>
                <ul className="flex">
                    <li className="nav-item">
                        <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                    </li>
                    {Auth.loggedIn() ? (
                        <>
                            <li className='nav-item'>
                                <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'} onClick={Auth.logout}>Logout</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link to='/login' className={currentPage === '/login' ? 'nav-link active' : 'nav-link'}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/signup' className={currentPage === '/signup' ? 'nav-link active' : 'nav-link'}>Sign up</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </>
    )
}