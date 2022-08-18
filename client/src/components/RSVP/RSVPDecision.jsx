import { useState } from 'react'

const RSVPDecision = ({ name, guestsAttending, setGuestsAttending }) => {
	const [decisions, setDecisions] = useState(guestsAttending)
	const handleDecision = (index) => {
		console.log(`index: ${index}`)
		let newDecisions = [...guestsAttending]
		console.log(`index: ${index} value before: ${newDecisions[index]}`)
		newDecisions[index] = !newDecisions[index]
		console.log(`index: ${index} value after: ${newDecisions[index]}`)
		setDecisions(newDecisions)
		setGuestsAttending(newDecisions)
		console.log(newDecisions)
	}

	return (
		<div className='rsvp-decision'>
			<p>Select who is attending:</p>
			<div className='rsvp-decision-list'>
				{decisions.map((decision, index) => {
					return (
						<div
							className='rsvp-decision-item'
							style={
								index % 2 === 0
									? { backgroundColor: 'rgba(255, 182, 193, 0.4' }
									: { backgroundColor: '#fff' }
							}
							key={index}
						>
							{index === 0 ? <p>{name}</p> : <p>Guest {index}</p>}
							
							<div className='form-control-check'>
								<label
									style={
										decision
											? { backgroundColor: 'black', color: 'white' }
											: { backgroundColor: '#fff' }
									}
									htmlFor={`attending${index}`}
								>
									<input
										type='radio'
										name={`attending${index}`}
										id={`attending${index}`}
										value={decision}
										checked={decision ? true : false}
										onChange={(e) => handleDecision(index)}
									/>
									Attending
								</label>
								<label
									style={
										!decision
											? { backgroundColor: 'black', color: 'white' }
											: { backgroundColor: '#fff' }
									}
									htmlFor={`notAttending${index}`}
								>
									<input
										type='radio'
										name={`notAttending${index}`}
										id={`notAttending${index}`}
										value={decision}
										checked={decision ? false : true}
										onChange={(e) => handleDecision(index)}
									/>
									Not Attending
								</label>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default RSVPDecision
