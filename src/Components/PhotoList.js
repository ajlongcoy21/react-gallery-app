// Import react components

import React from 'react';

// Import Photo, and notFound Components

import Photo from './Photo';
import NotFound from './NotFound';

// Create react element PhotoList

const PhotoList = props => { 
  
  // assign results the props.data - array of photo

  const results = props.data;
  
  // init photos variable

  let photos;

  // if we have results for the photos
  if (results.length > 0)
  {
    // iterate over the photo objects and create photo url

    photos = results.map(photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} key={photo.id}/>);
  }
  else
  {
    // if no photo objects setup the not found information

    photos = <NotFound />
  }

  
  // display the resulting information to the user

  return(
    <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {photos}
        </ul>
      </div>
  );
}

// Export element to be used by the main app.js

export default PhotoList;