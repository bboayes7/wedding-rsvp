import { useState, useEffect } from 'react'
import axios from 'axios'

const Admin = ({ setIsPasswordValid }) => {
	const [loading, setLoading] = useState(false)
	const [guestBook, setGuestBook] = useState([])
	const [guestName, setGuestName] = useState('')
	const [guestsInvited, setGuestsInvited] = useState('2')
	const [toggleDelete, setToggleDelete] = useState(false)

	useEffect(() => {
		getList()
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoading(true)
		axios
			.post('http://localhost:5000/api/rsvp/', {
				name: guestName,
				guestsInvited: guestsInvited,
			})
			.then((res) => {
				getList()
				setGuestName('')
				setGuestsInvited('4')
				setLoading(false)
			})
			.catch((err) => console.log(err))
	}

	const getList = async () => {
		await axios
			.get('http://localhost:5000/api/rsvp/')
			.then((res) => {
				setGuestBook(res.data)
				console.log(res.data)
			})
			.catch((err) => console.log(err))
	}

	const deleteGuest = async (id) => {
		console.log('hello from deleteGuest')
		console.log(`id: ${id}`)
		await axios
			.delete(`http://localhost:5000/api/rsvp/${id}`)
			.then((res) => {
				getList()
				setIsPasswordValid(true)
			})
			.catch((err) => console.log(err))
	}

	const toggleDeleteGuest = () => {
		setToggleDelete(!toggleDelete)
	}

	const handleDelete = (id) => {
		console.log(id)
		deleteGuest(id)
		getList()
	}
	const refreshList = () => {
		getList()
	}

	const attendingCount = (bool) => {
		let count = 0
		guestBook.forEach((guest) => {
			guest.guestsAttending.forEach((attending) => {
				if (attending === bool) {
					count++
				}
			})
		})
		return count
	}
	return (
		<div className='admin page'>
			<h1>Admin</h1>

			<div className='add-rsvp'>
				<h2>Add RSVP</h2>
				<form onSubmit={handleSubmit}>
					<div className='form-control'>
						<label>Name:</label>
						<input
							type='text'
							value={guestName}
							placeholder='Name'
							onChange={(e) => setGuestName(e.target.value)}
						/>
					</div>
					<div className='form-control'>
						<label>Guests:</label>
						<input
							type='text'
							value={guestsInvited}
							placeholder='# of guests'
							onChange={(e) => setGuestsInvited(e.target.value)}
						/>
					</div>
					<button className='add-rsvp-btn'>Submit</button>
				</form>
			</div>
			<div className='stats'>
				<div className='stats-item'>
					<h3>Attending</h3>
					<p>{attendingCount(true)}</p>
				</div>
				<div className='stats-item'>
					<h3>Not Attending</h3>
					<p>{attendingCount(false)}</p>
				</div>
				<div className='stats-item'>
					<h3># of Parties</h3>
					<p>{guestBook.length}</p>
				</div>
			</div>
			<div className="guest-list-title">
			<h2>Guest List</h2>
			<button className='rsvp-btn' onClick={refreshList}>refresh</button>

			</div>
			<div className='guest-list'>
				{loading ? (
					<h3>Loading...</h3>
				) : (
					<div className='guest-list-container'>
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Guests Invited</th>
									<th>Guests Attending</th>
									<th>Song</th>
									<th>Comments</th>
									<th>Email</th>
									<th>
										<button onClick={toggleDeleteGuest}>Delete Mode</button>
									</th>
								</tr>
							</thead>
							<tbody>
								{guestBook.map((guest, index) => (
									<tr
										style={
											index % 2 === 0
												? { backgroundColor: '#fff' }
												: { backgroundColor: '#eee' }
										}
										key={guest._id}
										className='guest-row'
									>
										<td>{guest.name}</td>
										<td>{guest.guestsInvited}</td>
										<td>{guest.guestsAttending.filter((decision) => {return decision}).length}</td>
										<td>{guest.song}</td>
										<td>{guest.comments}</td>
										<td>{guest.email}</td>
										<td
											style={
												toggleDelete
													? { display: 'none' }
													: { display: 'block' }
											}
										>
											<button onClick={() => handleDelete(guest._id)}>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	)
}

export default Admin
