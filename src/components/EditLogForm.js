import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function EditLogForm(props) {
  const firestore = useFirestore();
  const { log } = props;

  function handleEditLogFormSubmission(event) {
    event.preventDefault();
    props.onEditLog();
    const propertiesToUpdate = {
      topic: event.target.topic.value,
      notes: event.target.notes.value,
    }
    return firestore.update({collection: 'logs', doc: log.id}, propertiesToUpdate)
  }

  return (
    <>
      <ReusableForm 
        currentLog={log}
        formSubmissionHandler={handleEditLogFormSubmission} 
        buttonText="Update Log"
      />
    </>
  );
}

EditLogForm.propTypes = {
  log: PropTypes.object,
  onEditLog: PropTypes.func
};

export default EditLogForm;
