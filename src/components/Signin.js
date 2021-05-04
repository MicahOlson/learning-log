import React from 'react';
import firebase from 'firebase/app';

function Signin() {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      document.getElementsByClassName("sign-in-message").innerHTML = "Successfully signed in!";
    }).catch(function(error) {
      console.log(error)
      document.getElementsByClassName("sign-in-message").innerHTML = error;
    })
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
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
    <p className="sign-in-message"></p>

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

    <h3>Sign Out</h3>
  <button onClick={doSignOut}>Sign out</button>
    </>
  );
}

export default Signin;
