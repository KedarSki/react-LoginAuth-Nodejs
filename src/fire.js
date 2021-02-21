import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDFN0UwXywZTbhePF1F95UD392aaj71FiQ",
    authDomain: "react-login-494c1.firebaseapp.com",
    projectId: "react-login-494c1",
    storageBucket: "react-login-494c1.appspot.com",
    messagingSenderId: "1026299545361",
    appId: "1:1026299545361:web:0fc4e95251ea76730aeeb0"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;