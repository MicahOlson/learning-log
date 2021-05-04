import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function NewLogForm(props) {
  const firestore = useFirestore();
  function addLogToFirestore(event) {
    event.preventDefault();
    props.onNewLogCreation();
    return firestore.collection('logs').add(
      {
        name: event.target.name.value,
        topic: event.target.topic.value,
        notes: event.target.notes.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    )
  }
  return (
    <>
      <ReusableForm 
        formSubmissionHandler={addLogToFirestore}
        buttonText="Help!"
      />
    </>
  );
}

NewLogForm.propTypes = {
  onNewLogCreation: PropTypes.func
};

export default NewLogForm;
