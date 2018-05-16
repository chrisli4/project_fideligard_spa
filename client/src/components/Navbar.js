import React from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';

const CustomNavbar = (props) => {

	const { handleClick, isWideEnough, collapse } = props 

	return (

		<Navbar className='mb-3' color="primary-color" dark expand="md" scrolling>
			<NavbarBrand href="/">
				<strong>Fideligard Portfolio Simulator</strong>
			</NavbarBrand>
			{ !isWideEnough && <NavbarToggler onClick = { handleClick } />}
			<Collapse isOpen = { collapse } navbar>
				<NavbarNav right>
					<NavItem>
						<NavLink to="/portfolio">Portfolio</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/trades">Trades</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/transactions">Transactions</NavLink>
					</NavItem>
				</NavbarNav>
			</Collapse>
		</Navbar>

		)
}

export default CustomNavbar