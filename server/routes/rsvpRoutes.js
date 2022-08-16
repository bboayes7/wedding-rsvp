const express = require('express')
const router = express.Router()
const {
	getRSVP,
	updateRSVP,
	postRSVP,
	deleteRSVP,
	getOneRSVP,
	getGuestList,
} = require('../controllers/rsvpController')

router.get('/:name', getRSVP)

router.get('/id/:id', getOneRSVP)

router.get('/', getGuestList)

router.put('/:id', updateRSVP)

router.post('/', postRSVP)

router.delete('/:id', deleteRSVP)

module.exports = router
