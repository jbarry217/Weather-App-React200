import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props); 
    }


    render(){
        return(
            <form>
                <div className='row'>
                    <div className='col'>
                        <button type='button' className='btn btn-primary'>San Diego</button>
                        <button type='button' className='btn btn-primary'>New York</button>
                        <button type='button' className='btn btn-primary'>Washington D.C.</button>
                        <button type='button' className='btn btn-primary'>London</button>
                        <button type='button' className='btn btn-primary'>Tokyo</button>
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className='col input-group'>
                        <input type="text" className='form-control'/>
                        <button type="button" className='btn btn-outline'>Go!</button>
                    </div>
                </div>
            </form>
        );
    }
}