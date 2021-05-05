import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogListStyle = styled.h3`
  color: dodgerblue;
  &:hover {
    color: red;
  }
`;

function Log(props) {
  return (
    <>
      <div onClick = {() => props.whenLogClicked(props.id)}>
        <LogListStyle>
          {props.topic}
        </LogListStyle>
        <hr/>
      </div>
    </>
  );
}

Log.propTypes = {
  topic: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenLogClicked: PropTypes.func,
};

export default Log;
