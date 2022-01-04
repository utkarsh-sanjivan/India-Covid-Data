import React from 'react';

const Banner = ({
    className
}) => {
  return <div className='banner-container'>
    <div className={`note-text-header ${className}`}>Note**</div>
    <marquee
      className={`note-text ${className}`}
      behavior="scroll"
      direction="left"
      onmouseover="this.stop();"
      onmouseout="this.start();"
    >
      The data of the Covid-19 cases have been provided by the Ministry of Health and Family Welfare, Government of India.
    </marquee>
  </div>
}

export default Banner;