import React, { Component } from 'react';
import CustomNavbar from '../components/Navbar'


class NavbarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false,
        };
    }

    handleClick = (e) => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    handleToggle = (e) => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    
    render() {
        return (
          <CustomNavbar 
            handleToggle={this.handleToggle}
            handleClick={this.handleClick}
            {...this.state}
          />
        );
    }
}

export default NavbarContainer
