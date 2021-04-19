import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LogIn.css';
import logo from '../../images/logo.png';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); 
 }

const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const verifyToken = () =>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
        }).catch(function(error) {
            // Handle error
        });
    }

    const handleGoogleSingIn = () =>{
      firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            const credential = result.credential;

            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            const {displayName, email} = user;
            const newUser = {email:email, name:displayName};
            setLoggedInUser(newUser);
            verifyToken()
            history.replace(from);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            //if any error occured
            console.log(errorCode,errorMessage);
        });
    }
    
    return (
        <div className="login-container">
            <div className="text-center mt-5 pt-5">
              <img src={logo} alt="" style={{height:'80px'}}/>
              <p><small>bicycle service</small></p>
            </div>
            <div className="text-center">
              <button onClick={handleGoogleSingIn} className="login-btn btn btn-lg  btn-light"><FontAwesomeIcon icon={faGoogle}/> Google Sign In</button>
            </div>   
        </div>
    );
};

export default LogIn;