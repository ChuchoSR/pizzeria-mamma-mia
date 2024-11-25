import React from 'react';


const CustomNavBar = ({ onRegisterClick, onLoginClick}) => {
    const total = 25000;
    const token = false;



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
                <p>🛒 Total: ${total.toLocaleString()}</p>
            </div>
        </nav>
        </>
    );
};

export default CustomNavBar;
