import React, { useContext } from 'react';
import firebase from 'firebase/app'
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    setLoggedInUser(loggedInUser);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    const storeAuthToken = () =>{
        firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {        
            sessionStorage.setItem('token', idToken);
            // console.log(idToken);
          }).catch(function(error) {
            // Handling error
          });
    }

    return (
        <div className="login">
            <h3>Login Now!</h3>
            <br/>
            <button className="btn btn-info" onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
    );
};

export default Login;
