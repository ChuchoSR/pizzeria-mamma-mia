import React from 'react'
import { Modal, Button } from 'react-bootstrap';

const Cart = ({cart, setCart, showCart, toggleCart }) => {
    const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

    const increaseCount = (id) => {
        setCart((prevCart) => 
            prevCart.map((pizza) => 
                pizza.id === id ? {...pizza, count: pizza.count + 1} : pizza
            )
        )
    }

    const decreaseCount = (id) => {
        setCart((prevCart) =>
            prevCart.map((pizza) =>
                pizza.id === id && pizza.count > 1 ? { ...pizza, count: pizza.count - 1 } : pizza
            )
        );
    };

    const removePizza = (id) => {
        setCart((prevCart) => prevCart.filter((pizza) => pizza.id !== id));
        };
    
        return (
            <Modal  show={showCart} onHide={toggleCart} animation={true} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Carrito de Compras</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {cart.length === 0 ? (
                        <p>Tu carrito está vacío</p>
                    ) : (
                    cart.map((pizza) => (
                        <div key={pizza.id}>
                            <h3>{pizza.name}</h3>
                            <p>Precio: ${pizza.price}</p>
                            <p>Cantidad: {pizza.count}</p>
                            <div className="btn-cart">
                                <Button onClick={() => increaseCount(pizza.id)}>+</Button>
                                <Button onClick={() => decreaseCount(pizza.id)}>-</Button>
                                <Button onClick={() => removePizza(pizza.id)} variant="danger">Eliminar</Button>
                            </div>
                        </div>
                        ))
                    )}
                <h3>Total: ${total}</h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleCart}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            );
        };
        
        export default Cart;