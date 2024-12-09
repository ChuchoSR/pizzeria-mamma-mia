import React from 'react';
import Header from './Header';
import { pizzas } from '../js/pizzas';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Home = ({ addCart }) => {
    return (
        <>
            <Header />
            <div className="pizzas-container">
            {pizzas.map((pizza) => (
                <Card className="card-pizza" key={pizza.id} style={{ width: "20rem" }}>
                <Card.Img variant="top" src={pizza.img} />
                <Card.Body>
                    <Card.Title className="pizza-name">
                    <h3>{pizza.name}</h3>
                    </Card.Title>
                    <div className="divider"></div>
                    <Card.Text className="ingredients">Ingredientes:</Card.Text>
                    <Card.Text className="ingredients-list">
                    🍕 <span>{pizza.ingredients.join(", ")}</span>
                    </Card.Text>
                    <div className="divider"></div>
                    <Card.Text className="price">Precio: ${pizza.price}</Card.Text>
                </Card.Body>
                <div className="buttons">
                    <Button className="light" variant="light">
                    Ver Más 👀
                    </Button>
                    <Button
                    className="dark"
                    variant="dark"
                    onClick={() => addCart(pizza)} 
                    >
                    Añadir 🛒
                    </Button>
                </div>
                </Card>
            ))}
            </div>
        </>
    );
};  

export default Home


