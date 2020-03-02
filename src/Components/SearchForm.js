// Import react and redirect components

import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

// setup the SearchForm class

export default class SearchForm extends Component {
  
  // init the state of the SearchForm

  state = {
    searchText: '',
    redirect: false
  }

  // Create function to update the search text as the user types in the field

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  // create handle submit function to setup the search 

  handleSubmit = e => {

    // prevent the reloading of the page

    e.preventDefault();

    // initiate the call to the flickr server looking for pictures with user input

    this.props.onSearch(this.query.value);

    // reset the search field

    e.currentTarget.reset();

    // change the state of redirect to true to go the /custom-search url. Setup the callback function to set redirect back to false so the search input would still be visible.
    this.setState({redirect: true}, () => this.setState({redirect: false}));
  }
  
  // Call the render to show the user the information

  render() { 
      
    if (this.state.redirect) 
    {
        // show custom-search url and results

        return <Redirect to='/custom-search'/>;
    } 
    else 
    {
        // show the search input field for the user
        
        return (
            <form className="search-form" onSubmit={this.handleSubmit} >
              <input type="search"
                     onChange={this.onSearchChange}
                     name="search"
                     ref={(input) => this.query = input} 
                     placeholder="Search..."
                     required />
              <button type="submit" id="submit" className="search-button">
                  <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                      <path d="M0 0h24v24H0z" fill="none"/>
                  </svg>
              </button>
            </form>  
      
          );
    }
    
  }
}