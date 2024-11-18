import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PizzaCard = ({ img, name, ingredients, price }) => {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className='pizza-name'>
                    <h3>{name}</h3>
                </Card.Title>
                <div className="divider"></div>
                <Card.Text className='ingredients'>Ingredientes:</Card.Text>
                <Card.Text className='ingredients-list'>🍕 <span>{ingredients}</span></Card.Text>
                <div className="divider"></div>
                <Card.Text className='price'>Precio: ${price}</Card.Text>
            </Card.Body>
            <div className="buttons">
                <Button variant="light">Ver Más 👀</Button>
                <Button variant="dark">Añadir 🛒</Button>
            </div>
        </Card>
    );
};

export default PizzaCard;
