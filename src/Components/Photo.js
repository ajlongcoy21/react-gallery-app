import React from 'react';
import Img from 'react-image'
import imageNotAvailable from '../Pictures/imageNotAvailable.png'

const Photo = props => {

  return(
    <li>
      <Img src={[props.url, imageNotAvailable]} />
    </li>
  );
  
}

export default Photo;