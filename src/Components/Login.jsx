import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Login = ({show, onClose}) => {

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    const validarDatos = (e)  => {
        e.preventDefault();
    
        let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
        if(!email.trim() || !password.trim()) {
            alert('Por favor, ingrese todos los campos');
            return false;
        }
        if(password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres')
        }
    
        if(!validarEmail.test(email)) {
            alert('Correo electrónico no válido');
            return false;
        }else{
            alert('El inicio de sesion, ha sido exitoso')
            onClose()
            resetForm()
        }
    
    }

    return (
        <>
        <div className="modal-login">
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Accede a tu cuenta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={validarDatos}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese su email" 
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu contraseña" 
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={validarDatos}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        </>
    )
}

export default Login