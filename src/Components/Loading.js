// Import react and camera picture

import React from 'react';
import camera from '../Pictures/camera.png'

// Create react element Loading

const Loading = props => (
    
    // Display a div with the camera loading image to indicate to the user the app is fetching the data

    <div className='loading-image'><img src={camera} alt="" className='loading-image'></img></div>
);

// Export element to be used by the main app.js

export default Loading;