import React from 'react';
import PropTypes from 'prop-types';

function Log(props) {
  return (
    <>
      <div onClick = {() => props.whenLogClicked(props.id)}>
        <h3>{props.topic}</h3>
        <h4>{props.name}</h4>
        {/* <p><em>{props.notes}</em></p> */}
        {/* <p><em>{props.formattedWaitTime}</em></p> */}
        <hr/>
      </div>
    </>
  );
}

Log.propTypes = {
  name: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  notes: PropTypes.string,
  id: PropTypes.string,
  whenLogClicked: PropTypes.func,
  // formattedWaitTime: PropTypes.string
};

export default Log;
