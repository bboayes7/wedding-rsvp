import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='header-nav'>
			<div className='general-nav'>
				<ul>
					<Link to='/'>
						<li>Home</li>
					</Link>
					<Link to='/travel'>
						<li>Travel</li>
					</Link>
					<Link to='/faqs'>
						<li>FAQs</li>
					</Link>
					<Link to='/rsvp'>
						<li>RSVP</li>
					</Link>
					{/* <li><Link to='/photos'>Photos</Link></li> */}
				</ul>
			</div>
		</div>
	)
}

export default Navbar
