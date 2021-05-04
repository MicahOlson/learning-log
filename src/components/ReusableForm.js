import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  const { currentLog } = props;
  let name;
  let topic;
  let notes;

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
          defaultValue={name}
          placeholder='Name'
        />
        <input
          type='text'
          name='topic'
          defaultValue={topic}
          placeholder='Topic'
        />
        <textarea
          name='notes'
          defaultValue={notes}
          placeholder='Write your notes.'
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
