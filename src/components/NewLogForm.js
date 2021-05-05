import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/auth';

// function NewLogForm(props) {
//   const firestore = useFirestore();
//   function addLogToFirestore(event) {
//     event.preventDefault();
//     props.onNewLogCreation();
//     return firestore.collection('logs').add(
//       {
//         name: event.target.name.value,
//         topic: event.target.topic.value,
//         notes: event.target.notes.value,
//         timeOpen: firestore.FieldValue.serverTimestamp()
//       }
//     )
//   }
//   return (
//     <>
//       <ReusableForm 
//         formSubmissionHandler={addLogToFirestore}
//         buttonText="Help!"
//       />
//     </>
//   );
// }

function NewLogForm(props) {
  const user = firebase.auth().currentUser;
  const firestore = useFirestore();
  function addLogToFirestore(event) {
    event.preventDefault();
    props.onNewLogCreation();
    return firestore.collection('logs').add(
      {
        name: event.target.name.value,
        topic: event.target.topic.value,
        notes: event.target.notes.value,
        timeOpen: firestore.FieldValue.serverTimestamp(),
        userId: user.email
      }
    )
  }
  return (
    <>
      <ReusableForm 
        formSubmissionHandler={addLogToFirestore}
        buttonText="Add"
      />
    </>
  );
}

NewLogForm.propTypes = {
  onNewLogCreation: PropTypes.func
};

export default NewLogForm;
