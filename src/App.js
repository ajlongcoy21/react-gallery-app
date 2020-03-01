import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.css';
import axios from 'axios';

import PhotoList from './Components/PhotoList.js'

import apiKey from './config.js'
import Nav from './Components/Nav';
import PageNotFound from './Components/PageNotFound';
import Loading from './Components/Loading';
import SearchForm from './Components/SearchForm'

export default class App extends PureComponent {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      photosWesties:[],
      photosRainbows: [],
      photosFlowers: [],
      loading: true
    };
  }

  componentDidMount() {
    
    this.performSearch('Cats');
    this.performSearch('Westies');
    this.performSearch('Rainbows');
    this.performSearch('Flowers');
    
  }

  performSearch = (query) => {

    this.setState({loading: true});

    if (query === 'Westies') 
    {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
        
          this.setState({
            photosWesties: response.data.photos.photo,
            loading: false
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }
    else if (query === 'Rainbows') 
    {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
        
          this.setState({
            photosRainbows: response.data.photos.photo,
            loading: false
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }
    else if (query === 'Flowers') 
    {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
        
          this.setState({
            photosFlowers: response.data.photos.photo,
            loading: false
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
    }
    else
    {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }
    
  }

  render()
  {

    this.performSearch = this.performSearch.bind(this);

    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch}/>  
          <nav className="main-nav">
            <ul>
              <Nav navText='Westies' navLink='/Westies'  />
              <Nav navText='Rainbows' navLink='/Rainbows'  />
              <Nav navText='Flowers' navLink='/Flowers'  />
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" render={ () => (this.state.loading) ? <Loading/> : <PhotoList data={this.state.photos}/> } />
            <Route exact path="/Westies" render={ () => (this.state.loading) ? <Loading/>: <PhotoList data={this.state.photosWesties}/> } />
            <Route exact path="/Rainbows" render={ () => (this.state.loading) ? <Loading/> : <PhotoList data={this.state.photosRainbows}/> } />
            <Route exact path="/Flowers" render={ () => (this.state.loading) ? <Loading/> : <PhotoList data={this.state.photosFlowers}/> } />
            <Route exact path="/custom-search" render={ () => (this.state.loading) ? <Loading/> : <PhotoList data={this.state.photos}/> } />
            <Route component={PageNotFound}/>
          </Switch>
          
        </div>
      </BrowserRouter>
      
    );
  }
    
}
