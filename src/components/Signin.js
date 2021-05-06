// import React from 'react';
import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../firebase';
// import firebase from 'firebase/app';
// import * as firebaseui from 'firebaseui';
import { useHistory } from 'react-router-dom';

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function Signin() {
  const history = useHistory();

  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  return (
    <div>
      <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
      <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
    </div>
  );

  // // FirebaseUI
  // // Initialize the FirebaseUI Widget using Firebase.
  // const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
  // ui.start('#firebaseui-auth-container', {
  //   signInOptions: [
  //     {
  //     provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //     requireDisplayName: false
  //     }
  //   ]
  // });
  // const uiConfig = {
  //   callbacks: {
  //     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
  //       // User successfully signed in.
  //       // Return type determines whether we continue the redirect automatically
  //       // or whether we leave that to developer to handle.
  //       return true;
  //     },
  //     uiShown: function() {
  //       // The widget is rendered.
  //       // Hide the loader.
  //       document.getElementById('loader').style.display = 'none';
  //     }
  //   },
  //   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  //   signInFlow: 'popup',
  //   signInSuccessUrl: '/',
  //   signInOptions: [
  //     // Leave the lines as is for the providers you want to offer your users.
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  //     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  //     firebase.auth.GithubAuthProvider.PROVIDER_ID,
  //     firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //     firebase.auth.PhoneAuthProvider.PROVIDER_ID
  //   ],
  //   // Terms of service url.
  //   tosUrl: '<your-tos-url>',
  //   // Privacy policy url.
  //   privacyPolicyUrl: '<your-privacy-policy-url>'
  // };

  // // The start method will wait until the DOM is loaded.
  // ui.start('#firebaseui-auth-container', uiConfig);
 

  // return (
  //   <>
  //     <div id='firebaseui-auth-container'></div>
  //     <div id='loader'>Loading...</div>
  //   </>
  // )

  /// Roll-Your-Own
  // function doSignUp(event) {
  //   event.preventDefault();
  //   const email = event.target.email.value;
  //   const password = event.target.password.value;
  //   firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
  //     {document.querySelector("#sign-up-message").innerHTML = "You have successfully signed up and signed in."};
  //   }).catch(function(error) {
  //     // console.log(error)
  //   })
  //   // history.push('/');
  // }
  
  // function doSignIn(event) {
  //   event.preventDefault();
  //   const email = event.target.signinEmail.value;
  //   const password = event.target.signinPassword.value;
  //   firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
  //     {document.querySelector("#sign-in-message").innerHTML = "You have successfully signed in."};
  //   }).catch(function(error) {
  //     {document.querySelector("#sign-in-message").innerHTML = error}
  //     console.log(error.message);
  //   });
  //   // history.push('/');
  // }
  
  // function doSignOut() {
  //   firebase.auth().signOut().then(function() {
  //     {document.querySelector("#sign-out-message").innerHTML = "You have successfully signed out."};
  //   }).catch(function(error) {
  //     console.log(error.message);
  //   });
  //   // history.push('/');
  // }
  
  // return (
  //   <>
  //   <h3>Sign Up</h3>
  //   <form onSubmit={doSignUp}>
  //     <input
  //       type='text'
  //       name='email'
  //       placeholder='email' />
  //     <input
  //       type='password'
  //       name='password'
  //       placeholder='Password' />
  //       <button type='submit'>Sign up</button>
  //   </form>
  //     <p id="sign-up-message"></p>
  //   <hr/>
  //   <h3>Sign In</h3>
  //   <form onSubmit={doSignIn}>
  //     <input
  //       type='text'
  //       name='signinEmail'
  //       placeholder='email' />
  //     <input
  //       type='password'
  //       name='signinPassword'
  //       placeholder='Password' />
  //     <button type='submit'>Sign in</button>
  //   </form>
  //   <p id="sign-in-message"></p>
  //   <hr/>
  //   <h3>Sign Out</h3>
  //   <button onClick={doSignOut}>Sign out</button>
  //   <p id="sign-out-message"></p>
  //   </>
  // );
}

export default Signin;
