import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(result => {
    
            const {displayName, email} = result.user;
            const signedInUser = {displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
        
          })
          .catch(error => {
            
            error = error.message;
            
          });
    }
    return (
        <div  onClick = {handleGoogleSignIn}>
                <img src="https://i.ibb.co/nRx7jF4/google.png" alt=""  width = "30"/>&nbsp;&nbsp;
                <button><h6>Continue With Google</h6></button>
        </div>
    );
};

export default Login;