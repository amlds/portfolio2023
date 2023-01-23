import React from 'react';

const Arrow: React.FC = () => {
  return (
    <svg className='arrow' width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.5 1.5C23.5 0.671572 22.8284 -6.97079e-07 22 -4.02051e-07L8.5 -1.24499e-06C7.67157 -1.24499e-06 7 0.671571 7 1.5C7 2.32843 7.67157 3 8.5 3H20.5V15C20.5 15.8284 21.1716 16.5 22 16.5C22.8284 16.5 23.5 15.8284 23.5 15L23.5 1.5ZM3.06066 22.5607L23.0607 2.56066L20.9393 0.439339L0.93934 20.4393L3.06066 22.5607Z" fill="var(--text-color)"/>
    </svg>
  );
}

export default Arrow;
