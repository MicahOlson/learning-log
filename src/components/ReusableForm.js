import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  const { currentTicket } = props;
  let name = 'Name';
  let topic = 'Topic';
  let notes = 'Write your notes.';

  if (currentTicket) {
    name = currentTicket.name;
    topic = currentTicket.topic;
    notes = currentTicket.notes
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
  currentTicket: PropTypes.object,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
