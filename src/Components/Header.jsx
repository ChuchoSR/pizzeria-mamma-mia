import React from 'react'
import banner from '../assets/banner.jpg'

const Header = () => {
    return (
        <>
        <div className='banner-container'>
            <div className="overlay"></div>
            {/* <img className='banner' src={banner} alt="Banner" /> */}
            <div className="text-banner">
                <h1>¡Pizzería Mamma Mia!</h1>
                <h3>¡Tenemos las mejores pizzas que podrás encontrar!</h3>
            </div>
        </div>
        </>
    )
}

export default Header