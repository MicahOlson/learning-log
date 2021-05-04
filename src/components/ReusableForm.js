import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  const { currentLog } = props;
  let name = 'Name';
  let topic = 'Topic';
  let notes = 'Write your notes.';

  if (currentLog) {
    name = currentLog.name;
    topic = currentLog.topic;
    notes = currentLog.notes
  }

  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder={name}
        />
        <input
          type='text'
          name='topic'
          placeholder={topic}
        />
        <textarea
          name='notes'
          placeholder={notes}
        />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  currentLog: PropTypes.object,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
