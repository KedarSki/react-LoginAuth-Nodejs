import React from "react";
import { Form, Button, ButtonGroup, Container } from "react-bootstrap";
import "./LoginForm.css";
import { GoogleLogin } from "react-google-login";

const LoginForm = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    emailError,
    passwordError,
  } = props;

  const loginGoogle = (response) => {
    console.log(response);
    let res = response.profileObj;
    console.log(res);
  };

  return (
    <Form className="form">
      <Form.Group controlId="formBasicEmail">
        <Form.Label className={"userName"}>Username</Form.Label>
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
        <Form.Label className={"password"}>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p className="errorMsg"> {passwordError}</p>
      </Form.Group>

      <ButtonGroup aria-label="Basic example">
        <>
          <Button variant="primary" className={"signUp"} onClick={handleSignUp}>
            Sign Up
          </Button>
          <Button variant="primary" className={"signIn"} onClick={handleLogin}>
            Sign In
          </Button>
          <GoogleLogin
            className={"googleButton"}
            clientId={
              "1026299545361-nrlt19cm8sjkbbtmvrtlssjjppmguk92.apps.googleusercontent.com"
            }
            buttonText={"Login with Google"}
            onSuccess={loginGoogle}
            onFailure={loginGoogle}
          />
        </>
      </ButtonGroup>
    </Form>
  );
};

export default LoginForm;
