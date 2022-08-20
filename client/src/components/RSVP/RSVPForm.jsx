import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import RSVPDecision from './RSVPDecision'

const RSVPForm = ({ rsvp }) => {
	const navigate = useNavigate()
	const [id] = useState(rsvp._id)
	const [guestsInvited] = useState(rsvp.guestsInvited)
	const [guestsAttending, setGuestsAttending] = useState(rsvp.guestsAttending)
	const [song, setSong] = useState(rsvp.song)
	const [comments, setComments] = useState(rsvp.comments)
	const [email, setEmail] = useState(rsvp.email)

	const updateRSVP = async () => {
		const updatedRSVP = {
			_id: id,
			guestsInvited: guestsInvited,
			guestsAttending: [...guestsAttending],
			song: song,
			comments: comments,
			email: email,
		}
		console.log(updatedRSVP)
		await axios
			.put(`api/rsvp/${id}`, updatedRSVP)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const onSubmit = (e) => {
		try {
			e.preventDefault()

			updateRSVP({ id, guestsInvited, guestsAttending, song, comments, email })
			navigate('/thanks')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<RSVPDecision
					name={rsvp.name}
					guestsAttending={guestsAttending}
					setGuestsAttending={setGuestsAttending}
				/>

				<div className='form-control'>
					<label>
						What song do we need to play to get you on the dance floor?{' '}
					</label>
					<input
						type='text'
						value={song}
						placeholder='Song'
						onChange={(e) => setSong(e.target.value)}
					/>
				</div>
				<div className='form-control'>
					<label>Send a note to the couple?</label>
					<textarea
						value={comments}
						placeholder='Comments'
						onChange={(e) => setComments(e.target.value)}
					/>
				</div>
				<div className='form-control'>
					<label>If you want an RSVP confirmation, enter your email</label>
					<input
						type='text'
						value={email}
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<button className='rsvp-btn' type='submit'>
					Submit RSVP
				</button>
			</form>
		</div>
	)
}

export default RSVPForm
