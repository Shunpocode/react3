import React from 'react';
const Bg = require('./bg.webp');

const LazyBg = () => {
  return <img src={Bg} alt="" style={{ width: 'fit-content', height: '100%', position: 'absolute', zIndex: '0' }} />;
};

export default LazyBg;