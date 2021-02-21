import React, {useState, useEffect}from "react";
import fire from "./fire";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./MainPage";
import './App.css';
import { Container } from "react-bootstrap";
import EmailForm from "./components/emailForm/EmailForm";
import Header from "./components/header/Header";




const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };
 const handleLogin = () => {
   clearError();
fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch (err.code){
        case "auth/user-disabled":
        case "auth/user-not-found":
        setEmailError(err.message);
        break;
        case "auth/wrong-password":
        setPasswordError(err.message);
        break;
      }
    });
  };

  const handleSignUp = () => {
    clearError();
    fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
          switch (err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
        });
  };

  const handleLogOut = () => {
    fire.auth().signOut();
  };

const authListener = () => {
    fire.auth().onAuthStateChanged((user => {
      if(user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    }));
};

useEffect(() => {
authListener();
}, []);

  return (

<Container className='cont'>
  <Header />
  {user ? (
      <MainPage handleLogout={handleLogOut}/>
  ) : (
      <EmailForm
          email={email} s
          setEmail={setEmail}
          password={password} s
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
      />
  )}
</Container>
  );
};
export default App;
