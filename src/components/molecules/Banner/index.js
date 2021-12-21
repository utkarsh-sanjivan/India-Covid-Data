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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a faucibus magna. Duis erat augue, facilisis at euismod faucibus, condimentum vehicula neque. Aliquam erat volutpat. Nunc nisi felis, faucibus non tincidunt sit amet, porttitor ultrices enim. Phasellus ac mauris sem. Sed at imperdiet orci, efficitur mollis libero. Pellentesque lacinia massa eu nisi consectetur accumsan eget bibendum augue.
    </marquee>
  </div>
}

export default Banner;