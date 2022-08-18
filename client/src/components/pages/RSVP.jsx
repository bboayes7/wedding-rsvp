import { useState } from 'react'
import FindRSVP from '../RSVP/FindRSVP'
import RSVPList from '../RSVP/RSVPList'
import RSVPDetails from '../RSVP/RSVPDetails'
import rsvp from '../../assets/images/rsvp.png'
const RSVP = () => {
	const [showFindRSVP, setShowFindRSVP] = useState(true)
	const [guestName, setGuestName] = useState('')
	const [guestBook, setGuestBook] = useState([])
	const [showRSVPList, setShowRSVPList] = useState(false)
	const [showRSVPDetails, setShowRSVPDetails] = useState(false)
	const [selectedGuest, setSelectedGuest] = useState({})

	return (
		<div className='rsvp page'>
			<div className='rsvp-title'>
				<img className="wordart" src={rsvp} alt="rsvp wordart" />
			</div>
			{showFindRSVP ? (
				<FindRSVP
					guestName={guestName}
					setGuestBook={setGuestBook}
					setGuestName={setGuestName}
					setShowFindRSVP={setShowFindRSVP}
					setShowRSVPList={setShowRSVPList}
				/>
			) : (
				''
			)}
			{showRSVPList ? (
				<RSVPList
					guestBook={guestBook}
					setShowFindRSVP={setShowFindRSVP}
					setShowRSVPList={setShowRSVPList}
					setShowRSVPDetails={setShowRSVPDetails}
					setSelectedGuest={setSelectedGuest}
					showRSVPList={showRSVPList}
				/>
			) : (
				''
			)}
			{showRSVPDetails ? <RSVPDetails guest={selectedGuest} /> : ''}

		</div>
	)
}

export default RSVP
