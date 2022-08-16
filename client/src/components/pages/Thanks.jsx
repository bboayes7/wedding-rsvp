import React from 'react'
import bbys from '../../assets/images/bbys.jpg'

const Thanks = () => {
	return (
		<div className='thanks page'>
			<h1>Thanks for RSVPing!</h1>
			<div className='picture'>
				<img src={bbys} alt='cats' />
			</div>
		</div>
	)
}

export default Thanks
