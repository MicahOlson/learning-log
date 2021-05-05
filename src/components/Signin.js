import React from 'react';
import firebase from 'firebase/app';
// import { useHistory } from 'react-router-dom';

function Signin() {
  // const history = useHistory();

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      {document.querySelector("#sign-up-message").innerHTML = "You have successfully signed up and signed in."};
    }).catch(function(error) {
      // console.log(error)
    })
    // history.push('/');
  }
  
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      {document.querySelector("#sign-in-message").innerHTML = "You have successfully signed in."};
    }).catch(function(error) {
      {document.querySelector("#sign-in-message").innerHTML = error}
      console.log(error.message);
    });
    // history.push('/');
  }
  
  function doSignOut() {
    firebase.auth().signOut().then(function() {
      {document.querySelector("#sign-out-message").innerHTML = "You have successfully signed out."};
    }).catch(function(error) {
      console.log(error.message);
    });
    // history.push('/');
  }
  
  return (
    <>
    <h3>Sign Up</h3>
    <form onSubmit={doSignUp}>
      <input
        type='text'
        name='email'
        placeholder='email' />
      <input
        type='password'
        name='password'
        placeholder='Password' />
        <button type='submit'>Sign up</button>
    </form>
      <p id="sign-up-message"></p>
    <hr/>
    <h3>Sign In</h3>
    <form onSubmit={doSignIn}>
      <input
        type='text'
        name='signinEmail'
        placeholder='email' />
      <input
        type='password'
        name='signinPassword'
        placeholder='Password' />
      <button type='submit'>Sign in</button>
    </form>
    <p id="sign-in-message"></p>
    <hr/>
    <h3>Sign Out</h3>
    <button onClick={doSignOut}>Sign out</button>
    <p id="sign-out-message"></p>
    </>
  );
}

export default Signin;
