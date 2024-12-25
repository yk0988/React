// Header.js
import React from 'react';

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={function (event) {
            event.preventDefault();
            props.onChangMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

export default Header;
