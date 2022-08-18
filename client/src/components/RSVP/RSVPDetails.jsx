import RSVPForm from './RSVPForm'
import { useState } from 'react'
import heartDivider from '../../assets/images/nicerHeartDivider.gif'

const RSVPDetails = ({ guest }) => {
	const [toggleRSVPForm, setToggleRSVPForm] = useState(false)

	return (
		<div class='rsvp-details'>
			<img src={heartDivider} alt='heart divider' />
			{!toggleRSVPForm ? (
				<>
					<table>
						<tbody>
							<tr>
								<th>Name</th>
								<td>{guest.name}</td>
							</tr>
							<tr>
								<th>Invited Party of</th>
								<td>{guest.guestsInvited}</td>
							</tr>
							<tr>
								<th>Guests Attending Ceremony</th>
								<td>{guest.guestsAttending.filter((decision) => {return decision}).length}</td>
							</tr>
							{!guest.song ? null : (
								<tr>
									<th>Song</th>
									<td>{guest.song}</td>
								</tr>
							)}
							{!guest.comments ? null : (
								<tr>
									<th>Comments</th>
									<td>{guest.comments}</td>
								</tr>
							)}

						</tbody>
					</table>
					<button
						style={{ marginTop: '1rem' }}
						className='rsvp-btn'
						onClick={() => setToggleRSVPForm(!toggleRSVPForm)}
					>
						Edit / Update RSVP{' '}
					</button>
				</>
			) : (
				<RSVPForm rsvp={guest} />
			)}
		</div>
	)
}

export default RSVPDetails

// <p>
// 	<h2>{guest.name}</h2>
// 	<p>Party of: {guest.guests}</p>
// 	<p>
// 		<b>{guest.attending ? 'Attending' : 'Not Attending'}</b>
// 	</p>
// 	<p>{guest.attending ? 'Song: ' + guest.song : ''}</p>
// 	<p>{guest.attending ? 'Comments: ' + guest.comments : ''}</p>
// <button
// 	className='rsvp-btn'
// 	onClick={() => setToggleRSVPForm(!toggleRSVPForm)}
// >
// 	Edit / Update RSVP{' '}
// </button>
// </>
