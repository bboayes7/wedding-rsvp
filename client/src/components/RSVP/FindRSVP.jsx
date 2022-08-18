import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import anime from '../../assets/images/anime.jpg'
const FindRSVP = ({
	guestName,
	setGuestBook,
	setGuestName,
	setShowFindRSVP,
	setShowRSVPList,
}) => {
	const navigate = useNavigate()
	const onSubmit = (e) => {
		try {
			e.preventDefault()
			if (guestName === 'admin') {
				navigate('/admin')
			}
			if (!guestName) {
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
			.get(`http://localhost:5000/api/rsvp/${guestName}`)
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
			<form onSubmit={onSubmit}>
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
