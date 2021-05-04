import React from 'react';
import PropTypes from 'prop-types';

function LogDetail(props) {
  const { log, onClickingDelete } = props;
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h3 id="flip-card-topic">{log.topic}</h3>
          </div>
          <div className="flip-card-back">
            <p id="flip-card-notes"><em>{log.notes}</em></p>
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
