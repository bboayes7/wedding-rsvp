import axios from 'axios'

const FindRSVP = ({
	guestName,
	setGuestBook,
	setGuestName,
	setShowFindRSVP,
	setShowRSVPList,
}) => {
	const onSubmit = (e) => {
		e.preventDefault()
		getRSVP(guestName)
		setGuestName('')
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
		</div>
	)
}

export default FindRSVP
