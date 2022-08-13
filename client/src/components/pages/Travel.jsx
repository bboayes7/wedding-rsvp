import left from '../../assets/images/left.gif'
import right from '../../assets/images/right.gif'
import travel from '../../assets/images/travel.png'
import gdDivider from '../../assets/images/gd-divider.gif'
import plane from '../../assets/images/plane.gif'
import train from '../../assets/images/train.gif'
import wow from '../../assets/images/wow.gif'
import heartDivider from '../../assets/images/heartDivider.gif'
import happy from '../../assets/images/happy.jpg'
const travelTypes = [
	{
		type: 'plane',
		address: '3225 N Harbor Dr, San Diego, CA 92101',
		name: 'San Diego International Airport',
		website: 'https://www.google.com/travel/flights',
		distanceToCeremony: '3.2 miles',
		directionsToCeremony: 'https://goo.gl/maps/PvHn2ggs8EqBfX3d9',
	},
	{
		type: 'train',
		address: '4005 Taylor St. San Diego, CA 92110',
		name: 'Amtrak San Diego Old Town',
		website: 'https://www.amtrak.com/',
		distanceToCeremony: '1.6 miles',
		directionsToCeremony: 'https://goo.gl/maps/dNGdbfSzDbJK6MrD7',
	},
]

const hotels = [
	{
		name: 'Courtyard by Marriott San Diego Airport/Liberty Station',
		address: '2592 Laning Rd, San Diego, CA 92106',
		phone: '+16192211900',
		website:
			'https://www.marriott.com/en-us/hotels/sanal-courtyard-san-diego-airport-liberty-station/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0',
		distanceToCeremony: '0.9 miles',
		directionsToCeremony: 'https://goo.gl/maps/1BAE87nurEXf9x8X9',
	},
	{
		name: 'Holiday Inn San Diego - Bayside, an IHG Hotel',
		address: '4875 N Harbor Dr, San Diego, CA 92106',
		phone: '+16192243621',
		website:
			'https://www.ihg.com/holidayinn/hotels/us/en/san-diego/sanby/hoteldetail?cm_mmc=GoogleMaps-_-HI-_-US-_-SANBY',
		distanceToCeremony: '1.9 miles',
		directionsToCeremony: 'https://goo.gl/maps/9WvTmNyDproAZPUK7',
	},
	{
		name: 'Comfort Inn San Diego Airport At The Harbor',
		address: '5102 N Harbor Dr, San Diego, CA 92106',
		phone: '+16192238171',
		website:
			'https://www.choicehotels.com/california/san-diego/comfort-inn-hotels/ca768?mc=llgoxxpx',
		distanceToCeremony: '1.6 miles',
		directionsToCeremony: 'https://goo.gl/maps/tijr1usMw2xJwH828',
	},
	{
		name: 'Wyndham Garden San Diego near SeaWorld',
		address: '3737 Sports Arena Blvd, San Diego, CA 92110',
		phone: '+16198816100',
		website:
			'https://www.wyndhamhotels.com/wyndham-garden/san-diego-california/wyndham-garden-san-diego-near-seaworld/overview?CID=LC:GN::GGL:RIO:National:45033&iata=00093796',
		distanceToCeremony: '1.6 miles',
		directionsToCeremony: 'https://goo.gl/maps/AGBATNJAUELJnd5f7',
	},
	{
		name: 'Homewood Suites by Hilton San Diego Airport-Liberty Station',
		address: '2576 Laning Rd, San Diego, CA 92106',
		phone: '+16192220500',
		website:
			'https://www.hilton.com/en/hotels/sanlshw-homewood-suites-san-diego-airport-liberty-station/?SEO_id=GMB-AMER-HW-SANLSHW&y_source=1_MjA4MzM0Ni03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D',
		distanceToCeremony: '1.6 miles',
		directionsToCeremony: 'https://goo.gl/maps/ZyJFcaKAbfPH63Pa9',
	},
	{
		name: 'Travelodge by Wyndham San Diego SeaWorld',
		address: '3275 Rosecrans St, San Diego, CA 92110',
		phone: '+16194364990',
		website:
			'https://www.wyndhamhotels.com/travelodge/san-diego-california/travelodge-san-diego-seaworld/overview?CID=LC:TL::GGL:RIO:National:08726&iata=00093796',
		distanceToCeremony: '0.8 miles',
		directionsToCeremony: 'https://goo.gl/maps/1tCeZpiuro1YTPPF8',
	},
	{
		name: 'Best Western Yacht Harbor Hotel',
		address: '5005 N Harbor Dr, San Diego, CA 92106',
		phone: '+16192243254',
		website:
			'https://www.bestwestern.com/en_US/book/hotel-rooms.05226.html?iata=00171890&ssob=BLBWI0003G&cid=BLBWI0003G:yext:website:05226',
		distanceToCeremony: '1.7 miles',
		directionsToCeremony: 'https://goo.gl/maps/TXkWA95LrusjVLCM8',
	},
]

const Travel = () => {
	return (
		<div className='travel page'>
			<div className='travel-title'>
				<img src={travel} alt='travel wordart' />
			</div>
			<img src={gdDivider} alt='gd divider' />
			<div className='travel-info'>
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
			</div>
			<img src={gdDivider} alt='gd divider' />
			<div className='travel-types'>
				{travelTypes.map(
					({
						type,
						address,
						name,
						website,
						distanceToCeremony,
						directionsToCeremony,
					}) => (
						<div className='travel-type'>
							<br />
							<img src={type === 'plane' ? plane : train} alt={`${type} gif`} />
							<h2>{name}</h2>
							<a
								className='travel-link'
								href={directionsToCeremony}
								target='_blank'
								rel='noreferrer'
							>
								<p>{address}</p>
								<p>Directions to ceremony</p>
							</a>
							<p>
								Distance to Ceremony: {distanceToCeremony}
								<img src={wow} width='50px' alt={`${wow} gif`} />
							</p>
							<a
								className='travel-link'
								href={website}
								target='_blank'
								rel='noreferrer'
							>
								<p>Book a {type} ticket!</p>
							</a>
							<img src={gdDivider} alt='gd divider' />
						</div>
					)
				)}
			</div>
			<div className='hotels'>
				<h1>Hotels Nearby</h1>
				<img src={heartDivider} alt='heart divider' />
				<div className='hotel-list'>
					{hotels.map(
						({
							name,
							address,
							phone,
							website,
							distanceToCeremony,
							directionsToCeremony,
						}) => (
							<div className='hotel-info'>
								<a href={website} target='_blank' rel='noreferrer'>
									<h3>{name}</h3>
									Hotel Website
									<img src={left} alt={`${left} gif`} />
								</a>
								<p>Phone: {phone}</p>
								<p>{address}</p>
								<a href={directionsToCeremony} target='_blank' rel='noreferrer'>
									Directions to Ceremony
								</a>
								<p>Distance to Ceremony: {distanceToCeremony}</p>
								<img src={heartDivider} alt='heart divider' />
							</div>
						)
					)}
				</div>
			</div>
			<a
				href='https://www.google.com/maps/search/Hotels/@32.740633,-117.220236,15z/data=!3m1!4b1!4m10!2m9!3m5!2sStone+Brewing+World+Bistro+%26+Gardens+%E2%80%93+Liberty+Station!3s0x80deab0375ddf765:0xb7539190ea356d2!4m2!1d-117.2114812!2d32.7406063!5m2!5m1!1s2022-10-22'
				target='_blank'
				rel='noreferrer'
			>
				<h1>Find More Hotels</h1>
				<img src={heartDivider} alt='heart divider' />
			</a>
			<div className='picture'>
				<img src={happy} alt='happy' />
			</div>
		</div>
	)
}

export default Travel
