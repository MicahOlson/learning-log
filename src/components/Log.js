import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogListStyle = styled.h3`
  color: blue;
`;

function Log(props) {
  return (
    <>
      <div onClick = {() => props.whenLogClicked(props.id)}>
        <LogListStyle>
        {props.topic}
        </LogListStyle>
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
};

export default Log;
