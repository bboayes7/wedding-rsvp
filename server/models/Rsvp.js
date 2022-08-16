const mongoose = require('mongoose')

const rsvpSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: String,
		attending: { type: Boolean, required: true, default: false },
		guests: { type: Number, required: true, default: 0 },
		song: String,
		comments: String,
	},
	{ timestamps: true }
)

module.exports = mongoose.model('RSVP', rsvpSchema)
