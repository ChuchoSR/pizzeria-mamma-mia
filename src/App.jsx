import React, { useState }  from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import CustomNavBar from './Components/Navbar'
import CardPizza from './Components/CardPizza';
import FooterApp from './Components/Footer';
import Register from './Components/Register';
import Login from './Components/Login';
import Cart from './Components/Cart';


function App() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowRegister = () => setShowRegisterModal(true);
  const handleCloseRegister = () => setShowRegisterModal(false);


  const handleShowLogin = () => setShowLoginModal(true);
  const handleCloseLogin = () => setShowLoginModal(false);

const [cart, setCart] = useState([]);

const [showCart, setShowCart] = useState(false)

const toggleCart = () => {
  setShowCart(!showCart)
}

const [token, setToken] = useState(false)

const addCart = (pizza) => {
  setCart((prevCart) => {
    const index = prevCart.findIndex((item) => item.id === pizza.id);
    if (index !== -1) {
      return prevCart.map((item) =>
        item.id === pizza.id ? { ...item, count: item.count + 1 } : item
      );
    } else {
      return [...prevCart, { ...pizza, count: 1 }];
    }
  })
}

  return (
    <>
      <div className="principal-container">
      <CustomNavBar 
      onRegisterClick={handleShowRegister} 
      onLoginClick={handleShowLogin}
      cart={cart}
      token={token}
      toggleCart={toggleCart}
      showCart={showCart}
      />

      <Register show={showRegisterModal} onClose={handleCloseRegister} />
      <Login show={showLoginModal} onClose={handleCloseLogin}/>
      {showCart && <Cart cart={cart} setCart={setCart} showCart={showCart} toggleCart={toggleCart} />}
      {/* <Cart cart={cart} setCart={setCart}/> */}

      <Home 
      addCart={addCart} 
      setCart={setCart} 
      />


      {/* <div className="main-container">
      <CardPizza
        img='https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9
080-784dcc87ec2c'
        name='Napolitana'
        ingredients= {["mozzarella",", ", "Tomates", ", ", "Jamón", ", ", "orégano"]}
        price='5950'
      />

      <CardPizza
        img='https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab'
        name='Española'
        ingredients= {["mozzarella",", ", "gorgonzola", ", ", "parmesano", ", ", "provolone"]}
        price='6950'
      />

      <CardPizza
        img='https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3'
        name='Pepperoni'
        ingredients= {["mozzarella",", ", "pepperoni", ", "  ,"provolone"]}
        price='6950'
      />
      </div> */}
      <FooterApp/>
      </div>
    </>
  )
}

export default App
/* export const addCart = (pizza) => {
  setCart((prevCart) => {
    const index = prevCart.findIndex((item) => item.id === pizza.id);
    if (index !== -1) {
      return prevCart.map((item) =>
        item.id === pizza.id ? { ...item, count: item.count + 1 } : item
      );
    } else {
      return [...prevCart, { ...pizza, count: 1 }];
    }
  });
}; */
