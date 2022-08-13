import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='header-nav'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/travel'>Travel</Link></li>
                <li><Link to='/faqs'>Faqs</Link></li>
                {/* <li><Link to='/photos'>Photos</Link></li> */}
            </ul>
		</div>
	)
}

export default Navbar
