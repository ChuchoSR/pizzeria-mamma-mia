import React from 'react';


const CustomNavBar = () => {
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
                            <a href="#" className="link-nav">🔐Login</a>
                            <a href="#" className="link-nav">🔐Register</a>
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
