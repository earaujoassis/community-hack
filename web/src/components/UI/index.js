import React from 'react';

import './style.css';

const SpinningSquare = ({ style }) => (
  <div style={style || {}} className="UISpinningSquare-wrapper">
    <p>Loading</p>
    <div className="UISpinningSquare" />
  </div>
);

export {
  SpinningSquare
};
