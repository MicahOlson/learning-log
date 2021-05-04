import React from 'react';
import PropTypes from 'prop-types';

function LogDetail(props) {
  const { log, onClickingDelete } = props;
  return (
    <>
      <h1>Log Detail</h1>
      <h3>{log.topic} - {log.name}</h3>
      <p><em>{log.notes}</em></p>
      <button onClick={props.onClickingEdit}>Update Log</button>
      <button onClick={() => onClickingDelete(log.id)}>Close Log</button>
      <hr/>
    </>
  );
}

LogDetail.propTypes = {
  log: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default LogDetail;
