import React from 'react';

const LinearGradient = props => {
  const { data } = props;
  const boxStyle = {
    width: 180,
    margin: 'auto'
  };

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${data.fromColor} , ${data.toColor})`,
    height: 20
  };

  return (
    <div>
      <div style={boxStyle} className="display-flex">
        <span>{data.min}</span>
        <div style={{ ...boxStyle, ...gradientStyle }} className="mt8"></div>
        <span>{data.max}</span>
      </div>
    </div>
  );
};

export default LinearGradient;