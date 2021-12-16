import React, { useState } from 'react';
import './index.scss';

const RangeButton = ({
  onClick
}) => {
  const [isSelected, setIsSelected] = useState(3);

  return <div className="RangeButtons">
    <div
      id="begining"
      onClick={() => {
        onClick();
        setIsSelected(0);
      }}
      className={`RangeButton${isSelected === 0? " selected": ""}`}
    >
      Begining
    </div>
    <div 
      onClick={() => {
        onClick(365);
        setIsSelected(1);
      }}
      className={`RangeButton${isSelected === 1? " selected": ""}`}
    >
      1 year
    </div>
    <div 
      onClick={() => {
        onClick(90);
        setIsSelected(2);
      }}
      className={`RangeButton${isSelected === 2? " selected": ""}`}
    >
      3 months
    </div>
    <div 
      onClick={() => {
        onClick(30);
        setIsSelected(3);
      }}
      className={`RangeButton${isSelected === 3? " selected": ""}`}
    >
      1 month
    </div>
    <div 
      id="seven-days"
      onClick={() => {
        onClick(7);
        setIsSelected(4);
      }}
      className={`RangeButton${isSelected === 4? " selected": ""}`}
    >
      7 days
    </div>
  </div>
};

export default RangeButton;