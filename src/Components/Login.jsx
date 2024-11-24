import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
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
        }
    
    }

    return (
        <div className='login-container'>
            <h3>Inicio de Sesion</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Ingresa tu contraseña" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </Form.Group>
                <Button variant="primary" type="submit"  className='login-btn' onClick={validarDatos}>
                    Enviar
                </Button >
            </Form>
        </div>
    )
}

export default Login