import React from 'react';
import { Button } from 'react-bootstrap';

const CustomNavBar = ({ onRegisterClick, onLoginClick, cart, token, toggleCart }) => {
    return (
        <>
            <nav className='nav-bar'>
                <div className="left">
                    <a href="#" className="logo">Pizzería Mamma Mia!</a>
                    <a href="#" className="link-nav">🍕Home</a>
                    {token ? (
                        <>
                            <a href="#" className="link-nav">🔓 Profile</a>
                            <a href="#" className="link-nav">🔐 Logout</a>
                        </>
                    ) : (
                        <>
                            <a href="#" 
                               className="link-nav"
                               onClick={(e) => { e.preventDefault(); onLoginClick(); }}
                            >🔐Login</a>

                            <a
                               href="#"
                               className="link-nav"
                               onClick={(e) => { e.preventDefault(); onRegisterClick(); }}
                            >
                                🔐Register
                            </a>
                        </>
                    )}
                </div>
                <div className="right">
                    <Button variant="dark" onClick={toggleCart}>
                        Ver Carrito ({cart.length})
                    </Button>
                </div>
            </nav>
        </>
    );
};

export default CustomNavBar;
