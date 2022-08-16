import wedding from '../../assets/images/weddingWordArt.png'
import fireDivider from '../../assets/images/fireDivider.gif'
import rabbit from '../../assets/images/rabbit.gif'
import gargoyle from '../../assets/images/gargoyle.gif'
import beer from '../../assets/images/beer.gif'
import left from '../../assets/images/left.gif'
import right from '../../assets/images/right.gif'
import knot from '../../assets/images/knot.gif'
import wow from '../../assets/images/wow.gif'
import picture from '../../assets/images/romantic.jpg'
import savethedate from '../../assets/images/savethedate.jpg'
import heartDivider from '../../assets/images/heartDivider.gif'
const Home = () => {
	return (
		<div className='home page'>
			<div className='home-picture'>
				<img src={heartDivider} alt='heartDivider' />
				<img src={picture} alt='picture' />
				<img src={heartDivider} alt='heartDivider' />
			</div>
			<div className='home-title'>
				<img src={beer} alt='beer gif' />
				<img src={gargoyle} alt='gargoyle' />
				<div className='event-info'>
					<img className='wordart' src={wedding} alt='wedding word art' />
					<h2>
						<span className='text-acc'>༺꙰ [</span>
						Stone Brewery Liberty Station
						<span className='text-acc'>] ꙰༻</span>
					</h2>
					<h3>
						<span className='text-acc'>꧁☬</span>
						<b>
							<u>October 22, 2022 ✿ San Diego, CA</u>
						</b>
						<span className='text-acc'>༒꧂</span>
					</h3>
				</div>
				<img src={gargoyle} alt='gargoyle' />
				<img src={beer} alt='beer gif' />
			</div>
			<img className='fire-divider' src={fireDivider} alt='fire divider' />
			<div className='event-location'>
				<a
					href='https://goo.gl/maps/jtVwMgivXpmSwJGCA'
					target='_blank'
					rel='noreferrer'
				>
					<h3>2816 Historic Decatur Rd #116, San Diego, CA 92106</h3>
					<div className='directions-link'>
						<div className='text-acc'>
							<img src={right} alt='right gif' />
							<img src={right} alt='right gif' />
						</div>
						<img src={right} alt='right gif' />
						<img src={right} alt='right gif' />
						<h2>Get Directions</h2>
						<img src={left} alt='left gif' />
						<img src={left} alt='left gif' />
						<div className='text-acc'>
							<img src={left} alt='left gif' />
							<img src={left} alt='left gif' />
						</div>
					</div>
				</a>
			</div>
			<img className='fire-divider' src={fireDivider} alt='fire divider' />
			<div className='event-time'>
				<img src={rabbit} alt='rabbit gif' />
				<h1>3:00 PM - 8:00 PM</h1>
				<img src={rabbit} alt='rabbit gif' />
			</div>
			<img src={knot} alt='knot divider' />
			<div className='event-details'>
				<h3>Details:</h3>
				<ul>
					<li>free parking</li>
					<li>
						free drinks
						<img width='50px' src={wow} alt='wow gif' />
					</li>
					<li>attire: Business Casual (no jeans pls lol)</li>
					<li>
						near the airport and trainstation
						<img width='50px' src={wow} alt='wow gif' />
					</li>
					<li>plenty of hotels nearby!</li>
					<li>
						ends at a reasonable time
						<img width='50px' src={wow} alt='wow gif' />
					</li>
				</ul>
			</div>
			<img src={knot} alt='knot divider' />
			<div className='picture'>
				<img src={savethedate} alt='save the date' />
			</div>
	
			<img src={knot} alt='knot divider' />
		</div>
	)
}

export default Home
