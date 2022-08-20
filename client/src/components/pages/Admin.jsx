import { useState, useEffect } from 'react'
import axios from 'axios'
import RSVPDetails from '../RSVP/RSVPDetails'
const Admin = ({ setIsPasswordValid }) => {
	const [loading, setLoading] = useState(false)
	const [guestBook, setGuestBook] = useState([])
	const [guestName, setGuestName] = useState('')
	const [guestsInvited, setGuestsInvited] = useState('2')
	const [toggleDelete, setToggleDelete] = useState(false)
	const [sortByName, setSortByName] = useState(false)
	const [sortByGuestsInvited, setSortByGuestsInvited] = useState(false)
	const [sortByGuestsAttending, setSortByGuestsAttending] = useState(false)
	const [toggleAdd, setToggleAdd] = useState(false)
	const [toggleDetails, setToggleDetails] = useState(false)
	const [guest, setGuest] = useState({})

	useEffect(() => {
		try {
			getList()
		} catch {
			console.log('error')
		}
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault()
		setLoading(true)
		axios
			.post('/api/rsvp/', {
				name: guestName,
				guestsInvited: guestsInvited,
			})
			.then((res) => {
				getList()
				setGuestName('')
				setGuestsInvited('2')
				setToggleAdd(false)
				setLoading(false)
			})
			.catch((err) => console.log(err))
	}

	const getList = async () => {
		try {
			await axios
				.get('/api/rsvp/')
				.then((res) => {
					setGuestBook(res.data)
					console.log(res.data)
				})
				.catch((err) => console.log(err.response.data.message))
		} catch (error) {
			console.log(error)
		}
	}

	const deleteGuest = async (id) => {
		await axios
			.delete(`/api/rsvp/${id}`)
			.then((res) => {
				getList()
				setIsPasswordValid(true)
			})
			.catch((err) => console.log(err))
	}

	const refreshList = () => {
		getList()
	}
	const toggleAddRSVP = () => {
		setToggleAdd(!toggleAdd)
	}
	const toggleDeleteGuest = () => {
		setToggleDelete(!toggleDelete)
	}

	const handleDelete = (id) => {
		console.log(`id deleted: ${id}`)
		deleteGuest(id)
		getList()
	}

	const toggleSortByName = () => {
		setSortByName(!sortByName)
		if (sortByName) {
			sortListByName(true)
		} else {
			sortListByName(false)
		}
		setSortByGuestsAttending(false)
		setSortByGuestsInvited(false)
	}

	const toggleSortByPartySize = () => {
		setSortByGuestsInvited(!sortByGuestsInvited)
		if (sortByGuestsInvited) {
			sortListByPartySize(true)
		} else {
			sortListByPartySize(false)
		}
		setSortByName(false)
		setSortByGuestsAttending(false)
	}

	const sortListByName = (bool) => {
		if (bool) {
			setGuestBook(
				guestBook.sort((a, b) =>
					a.name.split(' ')[1].localeCompare(b.name.split(' ')[1])
				)
			)
		} else {
			setGuestBook(
				guestBook.sort((a, b) =>
					b.name.split(' ')[1].localeCompare(a.name.split(' ')[1])
				)
			)
		}
	}

	const sortListByPartySize = (bool) => {
		if (bool) {
			setGuestBook(guestBook.sort((a, b) => a.guestsInvited - b.guestsInvited))
		} else {
			setGuestBook(guestBook.sort((a, b) => b.guestsInvited - a.guestsInvited))
		}
	}

	const setDetails = (guest) => {
		setGuest(guest)
		setToggleDetails(!toggleDetails)
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
			{toggleDetails ? (
				<div className={toggleDetails ? 'rsvp-details-admin-overlay' : ''}>
					<div className='rsvp-details-admin'>
						<button
							className='rsvp-btn rsvp-details-admin-close'
							onClick={() => setToggleDetails(false)}
						>
							Close
						</button>
						{guest.name ? <RSVPDetails guest={guest} /> : null}
						<h1>Email: {guest.email}</h1>
					</div>
				</div>
			) : null}
			<div className='guest-list-title'>
				<button className='rsvp-btn' onClick={toggleAddRSVP}>
					Add RSVP
				</button>
				<button className='rsvp-btn' onClick={refreshList}>
					Refresh List
				</button>
				<button className='rsvp-btn' onClick={toggleDeleteGuest}>
					Delete RSVP
				</button>
			</div>
			<div className='add-rsvp'>
				{toggleAdd ? (
					<div>
						<h3>Add RSVP</h3>
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
				) : null}
			</div>
			<h2>Guest List</h2>
			<div className='guest-list'>
				{loading ? (
					<h3>Loading...</h3>
				) : (
					<div className='guest-list-container'>
						<table>
							<thead>
								<tr>
									<th onClick={toggleSortByName}>
										Name {!sortByName ? '▼' : '▲'}
									</th>
									<th onClick={toggleSortByPartySize}>
										Guests Invited {sortByGuestsInvited ? '▼' : '▲'}
									</th>
									<th>Guests Attending</th>
									{toggleDelete ? <th>DELETE</th> : null}
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
										<td onClick={() => setDetails(guest)}>{guest.name}</td>
										<td onClick={() => setDetails(guest)}>
											{guest.guestsInvited}
										</td>
										<td onClick={() => setDetails(guest)}>
											{
												guest.guestsAttending.filter((decision) => {
													return decision
												}).length
											}
										</td>
										{toggleDelete ? (
											<td
												style={
													!toggleDelete
														? { display: 'none' }
														: { display: 'block' }
												}
											>
												<button onClick={() => handleDelete(guest._id)}>
													Delete
												</button>
											</td>
										) : null}
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
