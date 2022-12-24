import React from 'react';
import { Link } from 'react-router-dom';

import {useAppSelector} from '../hooks/reduxHook'

const Navbar = () => {
    const items = useAppSelector((state) => state.cartReducer);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount">&#xf07a;</span>
            </div>
        </div>
    );
};

export default Navbar;