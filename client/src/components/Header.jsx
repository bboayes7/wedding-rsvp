import bbyKc from '../assets/images/bbykc.png'
import bbyBarry from '../assets/images/bbybarry.png'
import knot from '../assets/images/knot.gif'
import Navbar from './Navbar'

const Header = ({ toggleSong }) => {
	return (
		<div className='header'>
			<div onClick={() => toggleSong()} className='header-title'>
				<img className='babies' src={bbyKc} alt='baby Kc' />
				<div className='tie'>
					<h1>Kasey &amp; Barry</h1>
					<img src={knot} alt='knot divider' />
				</div>
				<img className='babies' src={bbyBarry} alt='baby Barry' />
			</div>
			<Navbar />
		</div>
	)
}

export default Header
