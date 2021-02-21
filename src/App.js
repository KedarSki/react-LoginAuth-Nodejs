import React, {useState, useEffect}from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Container } from "react-bootstrap";
import EmailForm from "./components/emailForm/EmailForm";
import Header from "./components/header/Header";
import fire from "./fire";


const App = () => {
 /* const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

 const handleLogin = () => {
fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch (err.code){
        case "auth/invalid-email";
        case "auth/user-disabled";
        case "auth/user-not-found";
        setEmailError(err.message);
        break;
        case "auth/wrong-password";
        setPasswordError(err.message);
        break;
      }
    })
  }
*/
  return (
<Container className={"cont"}>
  <Header />
    <EmailForm />
</Container>
  );
}

export default App;
