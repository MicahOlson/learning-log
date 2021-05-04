import React from 'react';
import PropTypes from 'prop-types';

function LogDetail(props) {
  const { log, onClickingDelete } = props;
  return (
    <>
      {/* <h1>Log Detail</h1> */}
      {/* <h3>{log.topic}</h3> */}
      {/* <p><em>{log.notes}</em></p> */}
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h3>{log.topic}</h3>
          </div>
          <div class="flip-card-back">
            <p><em>{log.notes}</em></p>
          </div>
        </div>
      </div>
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
