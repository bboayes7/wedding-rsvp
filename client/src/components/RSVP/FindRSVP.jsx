import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import anime from '../../assets/images/anime.jpg'
import { useState } from 'react'
const FindRSVP = ({
	guestName,
	setGuestBook,
	setGuestName,
	setShowFindRSVP,
	setShowRSVPList,
}) => {
	const navigate = useNavigate()
	const [guestError, setGuestError] = useState(false)

	const onSubmit = (e) => {
		e.preventDefault()
		try {
			if (guestName === 'admin') {
				navigate('/admin')
			}
			if (!guestName || guestName.length === 0) {
				setGuestError(true)
				setTimeout(() => {
					setGuestError(false)
				}, 1000)

				return
			}
			getRSVP(guestName)
			setGuestName('')
		} catch (error) {
			console.log(error)
		}
	}

	const getRSVP = async (guestName) => {
		await axios
			.get(`api/rsvp/${guestName}`)
			.then((res) => {
				setGuestBook(res.data)
				if (res.data.length === 0) {
					alert('No RSVP found')
					setShowRSVPList(false)
					return
				}
				setShowFindRSVP(false)
				setShowRSVPList(true)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div className='find-rsvp'>
			<p>Enter the name on the invitation:</p>
			<form className={guestError ? 'shake' : ''} onSubmit={onSubmit}>
				<input
					type='text'
					value={guestName}
					onChange={(e) => setGuestName(e.target.value)}
				/>
				<button type='submit'>Find</button>
			</form>
			<div className='picture'>
				<img src={anime} alt='anime' />
			</div>
		</div>
	)
}

export default FindRSVP
