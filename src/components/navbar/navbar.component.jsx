import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

import './navbar.styles.scss';

class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            clicked: false
        }
    }

    handleClick = () => {
        const { clicked } = this.state;
        this.setState({ clicked: !clicked });
    }

    render() {
        const { clicked } = this.state;
        return (
            <nav className='navbar'>
                <div className='logo'>
                    <h1 className='logo-text'>React</h1>
                    <FontAwesomeIcon className='logo-icon' icon={faReact} />
                </div>
                <div className={`${clicked ? 'active' : ''} menu`}>
                    <Link className='link' to='/'>
                        Home
                    </Link>
                    <Link className='link' to='/'>
                        Services
                    </Link>
                    <Link className='link' to='/'>
                        Products
                    </Link>
                    <Link className='link' to='/'>
                        Contact Us
                    </Link>
                    <Link className='link sign-up' to='/'>
                        Sign Up
                    </Link>
                </div>  
                <div className='menu-icon' onClick={this.handleClick}>
                    { clicked ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/> }                    
                </div>            
            </nav>
        )
    }
}

export default Navbar;