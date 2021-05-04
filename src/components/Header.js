import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LearningLogHeader = styled.h1`
  font-size: 48px;
  text-align: center;
  color: lightblue;
  text-shadow: 1px 1px gray;
`;

function Header() {
  return (
    <>
      <LearningLogHeader>
        Learning Log
      </LearningLogHeader>
      <p><Link to="/">Home</Link> | <Link to="/signin">Sign In</Link></p>
    </>
  );
}

export default Header;
