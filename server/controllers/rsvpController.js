const RSVP = require('../models/Rsvp')
const nodemailer = require('nodemailer')

const getGuestList = async (req, res) => {
	try {
		const rsvp = await RSVP.find()
		if (rsvp.length === 0) {
			return res.status(404).json({
				message: 'No guests found',
			})
		}

		console.log(`GET guest list returned: ${rsvp}`)
		res.status(200).json(rsvp)
	} catch (err) {
		console.log(err)
		res.status(500).json({ message: 'Error getting guest list' })
	}
}

const getRSVP = async (req, res) => {
	const guestName = req.params.name
	if (!guestName) {
		return res.status(400).json({ msg: 'No name provided' })
	}
	if (guestName === '.' || guestName === '*') {
		return res.status(400).json({ msg: 'no' })
	}

	if (guestName.length < 2) {
		return res.status(400).json({ msg: 'Name must be alphabetic' })
	}
	try {
		const rsvp = await RSVP.find({ name: new RegExp(guestName, 'i') })
		res.status(200).json(rsvp)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
}

const getOneRSVP = async (req, res) => {
	const id = req.params.id
	if (!id) {
		return res.status(400).json({
			error: 'No id provided',
		})
	}

	try {
		const rsvp = await RSVP.findById(id)
		res.status(200).json(rsvp)
	} catch (err) {
		res.status(500).json({
			error: err,
		})
	}
}

const updateRSVP = async (req, res) => {
	const id = req.params.id
	if (!id) {
		return res.status(400).json({
			message: 'Id is required',
		})
	}

	console.log(id)
	try {
		let rsvp = await RSVP.findById(id)
		const { email, guestsAttending, song, comments } = req.body
		await rsvp.updateOne({ guestsAttending, song, comments, email })
		rsvp = await RSVP.findById(id)
		res.status(200).json(rsvp)
		if (email) {
			try {
				emailConfirmation(rsvp)
				emailNotification(rsvp)
			} catch (err) {
				console.log(err)
			}
		}
	} catch (err) {
		res.status(500).json({
			message: err.message,
		})
	}
}

const postRSVP = async (req, res) => {
	const { name, guestsInvited } = req.body

	if (!name || !guestsInvited) {
		res.status(400).json({ message: 'Please fill out all fields' })
	}
	try {
		const attendanceList = createAttendanceList(guestsInvited)
		const rsvp = await RSVP.create({
			name,
			guestsInvited,
			guestsAttending: attendanceList,
		})
		res.status(200).json(rsvp)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
}

const createAttendanceList = (guestsInvited) => {
	if (guestsInvited === 0) {
		return []
	}

	const attendanceList = []
	for (let i = 0; i < guestsInvited; i++) {
		attendanceList.push(false)
	}
	return attendanceList
}

const deleteRSVP = async (req, res) => {
	const { id } = req.params
	if (!id) {
		return res.status(400).json({
			message: 'Id is required',
		})
	}
	try {
		console.log(`id: ${id}`)
		const rsvp = await RSVP.findByIdAndDelete(id)
		res.status(200).json(rsvp)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
}

//Email
const transporter = nodemailer.createTransport({
	service: 'gmail',
	host: 'smtp.gmail.com',
	secure: false,
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
})

const emailConfirmation = (rsvp) => {
	const mailOptions = {
		from: `Kasey & Barry <${process.env.EMAIL}>`,
		to: rsvp.email,
		subject: 'RSVP Confirmation',
		text: `Thanks for the RSVP, ${
			rsvp.name
		}. We look forward to seeing you at the party! \nYour RSVP details: \n${
			rsvp.guestsAttending.filter((attending) => attending).length > 0
				? `You are attending with a party of ${
						rsvp.guestsAttending.filter((decision) => {
							return decision
						}).length
				  }`
				: 'You are not attending'
		}. \n${
			rsvp.song ? `You want to hear ${rsvp.song}` : 'whatever is playing'
		} \n${
			rsvp.comments
				? `You have left the following comments: \n${rsvp.comments}`
				: 'nothing'
		}`,
	}
	try {
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				console.log(err)
			} else {
				console.log(info)
			}
		})
	} catch (err) {
		console.log(err)
	}
}

const emailNotification = (rsvp) => {
	const mailOptions = {
		from: `${rsvp.name} has RSVPed <${rsvp.email}>`,
		to: process.env.EMAIL,
		subject: `${rsvp.name} has RSVPed!`,
		text: `${rsvp.name} has RSVPed! ${
			rsvp.attending
				? `${rsvp.name} is attending with a party of ${rsvp.guestsInvited}`
				: 'They are not attending'
		}. ${rsvp.song ? `They are want to hear ${rsvp.song}` : 'nothing'} ${
			rsvp.comments
				? `They have left the following comments: ${rsvp.comments}`
				: 'nothing'
		}`,
	}
	try {
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				console.log(err)
			} else {
				console.log(info)
			}
		})
	} catch (err) {
		console.log(err)
	}
}

module.exports = {
	getRSVP,
	getOneRSVP,
	updateRSVP,
	postRSVP,
	deleteRSVP,
	getGuestList,
}
