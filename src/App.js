import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Container } from "react-bootstrap";
import EmailForm from "./components/emailForm/EmailForm";
import Header from "./components/header/Header";


const App = () => {
  return (
<Container className={"cont"}>
  <Header />
    <EmailForm />
</Container>
  );
}

export default App;
