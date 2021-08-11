import React from 'react';
import { useHistory } from 'react-router';

function Header() {
  const history = useHistory();

  return (
    <h1 className="text-3xl leading-10 py-3 my-2">
      <span style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>
        Random Word Selector
      </span>
    </h1>
  );
}

export default Header;
