import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const RSVPForm = ({ rsvp }) => {
    const navigate = useNavigate()
	const [id, setId] = useState(rsvp._id)
	const [attending, setAttending] = useState(rsvp.attending)
	const [song, setSong] = useState(rsvp.song)
	const [comments, setComments] = useState(rsvp.comments)
	const [email, setEmail] = useState(rsvp.email)

	const updateRSVP = async () => {
		const updatedRSVP = {
			_id: id,
			attending: attending,
			song: song,
			comments: comments,
			email: email,
		}
		console.log(updatedRSVP)
        await axios.put(`http://localhost:5000/api/rsvp/${id}`, updatedRSVP).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        }
        )
	}

	const onSubmit = (e) => {
		e.preventDefault()

		updateRSVP({ id, attending, song, comments, email })
        navigate('/thanks')
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className='form-control-check'>
					<label htmlFor='attending'>
					<input
						type='radio'
						name='attending'
						id='attending'
						value={attending}
						checked={attending ? true : false}
						onChange={(e) => setAttending(true)}
						/>
						Attending 
					</label>
					<label htmlFor='notAttending'>
					<input
						type='radio'
						name='attending'
						id='notAttending'
						value={attending}
						checked={attending ? false : true}
						onChange={(e) => setAttending(false)}
						/>
						Not Attending
					</label>
				</div>
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
