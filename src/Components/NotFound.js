// Import react

import React from 'react';

// Create react element NotFound

const NotFound = props => (

    // Create list element showing that the results were not found in the search

    <div className="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
    </div>
);

// Export element to be used by the main app.js

export default NotFound;