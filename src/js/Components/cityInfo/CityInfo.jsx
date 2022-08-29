import React from 'react'; 

export default class CityInfo extends React.Component {
    render(){
        return (
            <div className='card border-info'>
                <div className='card-header text-white bg-info'>City Information</div>
                <div className='card-body'>
                    <h1 className='text-center'>City</h1>
                    <p className='text-center'>Lat/Long: </p>

                    <div className='row'>
                        <div className='col'><h5 className='text-center'>Temp {`(F)`}</h5></div>
                        <div className='col'><h5 className='text-center'>Pressure</h5></div>
                        <div className='col'><h5 className='text-center'>Humidity</h5></div>
                    </div>

                    <div className='row'>
                        <div className='col'><h5 className='text-center text-success'></h5></div>
                        <div className='col'><h5 className='text-center text-success'></h5></div>
                        <div className='col'><h5 className='text-center text-success'></h5></div>
                    </div>

                    <div className='row'>
                        <div className='col'><h5 className='text-center'>Lowest Temp {`(F)`}</h5></div>
                        <div className='col'><h5 className='text-center'>Highest Temp {`(F)`}</h5></div>
                        <div className='col'><h5 className='text-center'>Wind Speed</h5></div>
                    </div>

                    <div className='row'>
                        <div className='col'><h5 className='text-center text-success'></h5></div>
                        <div className='col'><h5 className='text-center text-success'></h5></div>
                        <div className='col'><h5 className='text-center text-success'></h5></div>
                    </div>

                </div>

            </div>
        )
    }
}