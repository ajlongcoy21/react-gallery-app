// Import react

import React from 'react';

// Create react element PageNotFound

const PageNotFound = props => (

    // Display div showing the user they tried to go to a page that is not found

    <div className="not-found">
        <h3>404 - Page Not Found</h3>
        <p>The page you are looking for does not exist.</p>
    </div>
);

// Export element to be used by the main app.js

export default PageNotFound;