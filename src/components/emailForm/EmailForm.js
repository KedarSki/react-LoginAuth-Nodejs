import React from "react";
import {Form,Button,ButtonGroup} from "react-bootstrap";
import "./EmailForm.css";


const EmailForm = (props) => {

    const {email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        emailError,
        passwordError } =
    props;
    return (
        <Form className="form">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    autoFocus
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <p className="errorMsg"> {emailError}</p>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required value={password} onChange={(event) => setPassword(event.target.value)}
                />
                <p className="errorMsg"> {passwordError}</p>
            </Form.Group>

            <ButtonGroup aria-label="Basic example">
                    <>
                        <Button variant="primary" className={'signUp'} onClick={handleSignUp}>Sign Up</Button>
                        <Button variant="primary" className={'signIn'} onClick={handleLogin}>Sign In</Button>
                    </>
            </ButtonGroup>
        </Form>
        );

};

export default EmailForm;