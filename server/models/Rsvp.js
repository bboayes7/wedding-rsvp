const mongoose = require('mongoose')

const rsvpSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: String,
		guestsInvited: { type: Number, required: true, default: 1 },
		guestsAttending: { type: Array, required: true, default: 0 },
		song: String,
		comments: String,
	},
	{ timestamps: true }
)

module.exports = mongoose.model('RSVP', rsvpSchema)
