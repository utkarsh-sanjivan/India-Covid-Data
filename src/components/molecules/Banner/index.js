import React from 'react';

const Banner = ({
    className
}) => {
  return <div className='banner-container'>
    <div className={`note-text-header ${className}`}>Note**</div>
    <marquee
      className={`note-text ${className}`}
      onMouseOver={event => event.target.stop()}
      onMouseOut={event => event.target.start()}
      behavior="scroll"
    >
      The data of the Covid-19 cases have been provided by the Ministry of Health and Family Welfare, Government of India.
    </marquee>
  </div>
}

export default Banner;