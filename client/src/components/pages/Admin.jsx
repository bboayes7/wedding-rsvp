import { useState, useEffect } from 'react'
import axios from 'axios'

const Admin = () => {
	const [loading, setLoading] = useState(false)
	const [guestBook, setGuestBook] = useState([])
	const [guestName, setGuestName] = useState('')
	const [guests, setGuests] = useState('')
	const [toggleDelete, setToggleDelete] = useState(false)
    const [selectedGuest, setSelectedGuest] = useState('')

	useEffect(() => {
		getList()
	}, [])

	const handleSubmit = async (e) => {
		setLoading(true)
		e.preventDefault()
		axios
			.post('http://localhost:5000/api/rsvp/', {
				name: guestName,
				guests: guests,
				attending: false,
			})
			.then((res) => {
				getList()
                setGuestName('')
                setGuests('')
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
			.then((res) => {})
			.catch((err) => console.log(err))
	}

	const toggleDeleteGuest = () => {
		setToggleDelete(!toggleDelete)
	}

	const handleDeleteSubmit = () => {
        // deleteGuest(selectedGuest)
        console.log('hello from handleDelete')
		// deleteGuest(e.target.id)
        
	}

	return (
		<div className='admin page'>
			<h1>Admin</h1>
			<div className='guest-list'>
				<h2>Guest List</h2>
                <div className="stats">
                    <div className="stats-item">
                        <h3>Attending</h3>
                        <p>{guestBook.filter(guest => guest.attending).length}</p>
                        </div>
                    <div className="stats-item">
                        <h3>Not Attending</h3>
                        <p>{guestBook.filter(guest => !guest.attending).length}</p>
                        </div>
                    <div className="stats-item">
                        <h3>Total</h3>
                        <p>{guestBook.length}</p>
                        </div>
                        
                </div>
				{loading ? (
					<h3>Loading...</h3>
				) : (
					<div className='guest-list-container'>
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Guests</th>
									<th>Attending</th>
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
										<td>{guest.guests}</td>
										<td
											style={
												!guest.attending
													? { backgroundColor: 'red' }
													: { backgroundColor: 'green' }
											}
										>
											{guest.attending ? 'Yes' : 'No'}
										</td>
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
											<form onSubmit={() => {
                                                deleteGuest(guest._id)
                                                getList()
                                            
                                            }}>
												<button value={guest._id}>Delete</button>
											</form>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
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
							value={guests}
							placeholder='# of guests'
							onChange={(e) => setGuests(e.target.value)}
						/>
					</div>
					<button className='add-rsvp-btn'>Submit</button>
				</form>
			</div>
		</div>
	)
}

export default Admin
