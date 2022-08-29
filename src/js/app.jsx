import React from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import CityInfo from './Components/cityInfo/cityInfo';
import SearchHistory from './Components/SearchHistory/SearchHistory'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>  
            <h1 className='display-3 text-center fw-bold my-3'>Weather App</h1>
              <h5 className='text-center fst-italic mb-5'>Check the weather around the world!</h5>
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
