// Import react, img components
// import the imageNotAvailable for pictures that are not able to be loaded

import React from 'react';
import Img from 'react-image';
import imageNotAvailable from '../Pictures/imageNotAvailable.png';

// Create react element Photo

const Photo = props => {

  // return list element with image. first try to use the url from the photo then if it is not available use imageNotAvailable as the default 

  return(
    <li>
      <Img src={[props.url, imageNotAvailable]} />
    </li>
  );
  
}

// Export element to be used by the main app.js

export default Photo;