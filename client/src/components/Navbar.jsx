import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='header-nav'>
			<div className='general-nav'>
				<ul>
					<NavLink to='/' >
						<li>Home</li>
					</NavLink>
					<NavLink to='/travel'>
						<li>Travel</li>
					</NavLink>
					<NavLink to='/faqs'>
						<li>FAQs</li>
					</NavLink>
					<NavLink to='/rsvp'>
						<li>RSVP</li>
					</NavLink>
					{/* <li><Link to='/photos'>Photos</Link></li> */}
				</ul>
			</div>
		</div>
	)
}

export default Navbar
