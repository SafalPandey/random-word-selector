import React from 'react';
import { useHistory } from 'react-router';

function Header() {
  const history = useHistory();

  return (
    <h1 style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>
      Random Word Selector
    </h1>
  );
}

export default Header;
