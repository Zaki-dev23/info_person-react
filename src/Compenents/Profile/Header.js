import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import './Header.css'

class Header extends Component{
    render(){
        return( <div className='d-flex justify-content-around f-family'>
            
            <h1 className='text-white'>Zaki<span style={{color : "violet"}}>.</span>Laasri</h1>
            </div>
        )
    }
}

export default Header;