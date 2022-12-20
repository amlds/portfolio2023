import React from 'react';
/* import { Link } from 'react-router-dom'; */

export default function Header() {
  return (
    <header>
      <div>
        <h3>Alexy Martinet</h3>
        <p>@amlds</p>
        <p>Developper / Designer</p>
      </div>

      {/* <div className="contact">
      <svg width="400px" height="74" viewBox="0 0 399 74" fill="none">
        <path d="M324.5 2.5H74.5L5.5 71.5H393.5L324.5 2.5Z" stroke="#FAF7F2" stroke-width="4"/>
      </svg>
      <span className='contact__text'>
        <p>CONTACT ○ CONTACT ○ CONTACT ○ CONTACT ○ CONTACT ○ CONTACT ○ CONTACT ○ CONTACT ○ </p>
      </span>
      </div> */}

      <div className="contact">
        <span className='contact__text'>
          <p>CONTACT ○ CONTACT ○ CONTACT ○ CONTACT ○ CONTACT ○ CONTACT ○ CONTACT ○ CONTACT ○ </p>
        </span>
      </div>
    </header>
  );
}
