import React from 'react'
import Navbar from './Navbar'
import car from '../assets/images/car.gif'
// import  from '../../assets/images/.gif'
const Footer = () => {
	return (
		<footer className='footer'>
			<img src={car} alt='car gif' />
      <Navbar />
			<img src={car} alt='car gif' />
		</footer>
	)
}

export default Footer
