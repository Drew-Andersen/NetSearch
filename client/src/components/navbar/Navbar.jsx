import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';

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
                    <li className="nav-item">
                        <Link to='/login' className={currentPage === '/login' ? 'nav-link active' : 'nav-link'}>Login</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}