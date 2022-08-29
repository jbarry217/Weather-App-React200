import React from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import CityInfo from './Components/cityInfo/cityInfo';
import SearchHistory from './Components/SearchHistory/SearchHistory'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 className='text center my-3'>Weather App</h1>
              <p className='text center mb-3'>Check the weather around the world!</p>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <SearchBar />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <CityInfo />
          </div>
          <div className='col-12 col-md-6'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
