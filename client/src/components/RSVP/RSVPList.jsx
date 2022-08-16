const RSVPList = ({
	guestBook,
	setShowRSVPDetails,
	showRSVPList,
	setShowRSVPList,
	setSelectedGuest,
	setShowFindRSVP
}) => {
	
	const setGuest = (guest) => {
		setSelectedGuest(guest)
		setShowRSVPDetails(true)
		setShowRSVPList(false)
		setShowFindRSVP(false)
	}

	return (
		<div className='rsvp-list'>
			<p>Select your RSVP below:</p>
			{showRSVPList
				? guestBook.map((guest) => {
						return (
							<div onClick={() => setGuest(guest) } className='rsvp-list-item' key={guest._id}>
								<h2>{guest.name}</h2>
								<p>Party of: {guest.guests}</p>
								<button className="rsvp-btn" onClick={() => setGuest(guest) }>View/Update RSVP</button>
							</div>
						)
				  })
				: ''}
		</div>
	)
}

export default RSVPList
