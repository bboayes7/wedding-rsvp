import { Link } from 'react-router-dom'

const RsvpListItem = ({ guest, handleSelect }) => {

	return (
			<div className='rsvp-list-item' key={guest._id}>
				<h2>{guest.name}</h2>
				<p>Party of: {guest.guests}</p>
				<button onClick={handleSelect(guest._id)}>View/Update RSVP</button>
			</div>
	)
}

export default RsvpListItem
