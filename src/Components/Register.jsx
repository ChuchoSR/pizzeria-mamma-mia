import React, { useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const RegisterCopy = ({ show, onClose }) => {

    const resetForm = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validarDatos = (e) => {
        e.preventDefault();

        let validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if(!email.trim() || !password.trim() || !confirmPassword.trim()) {
            alert('Por favor, ingrese todos los campos')
            return false;

        }if(password != confirmPassword){
            alert('Las contraseñas no coinciden')
            return false;

        }if(!validarEmail.test(email)) {
            alert('Email no valido')
            return false;
        }else{
            alert('Registro exitoso')
            onClose()
            resetForm()
        }
    };

    return (
        <>
        <div className="modal-register">
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crea una cuenta</Modal.Title>
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
                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Confirma tu contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Repite tu contraseña" 
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
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
    );
};

export default RegisterCopy;
