import welcome from '../assets/images/welcome.gif'
import { useState } from 'react'
const Password = ({ setIsPasswordValid }) => {
	const [pwError, setPwError] = useState(false)
	const [pw, setPw] = useState('')
	
	const handleSubmit = (e) => {
		try {
			e.preventDefault()
			console.log(pw)
			if (
				pw.length > 16 ||
				pw.length === 0 ||
				pw.length === null ||
				pw.length === undefined ||
				pw.length === '' ||
				pw === null ||
				pw === undefined
			) {
				setPwError(true)
				setTimeout(() => {
					setPwError(false)
				} , 5000)
			} else if (pw === process.env.REACT_APP_PASSWORD) {
				console.log('correct')
				setIsPasswordValid(true)
			} else {
				setPwError(true)
				console.log('incorrect')
			}
		} catch (error) {
			console.log(error)
			setPwError(true)
		}
	}

	return (
		<div className='password-form'>
			<img src={welcome} alt='welcome gif' />
			<h1>Enter the password to view the website:</h1>
			<form class={pwError ? 'shake' : ''}>
				<label>
					<input
						type='password'
						placeholder='Password'
						onChange={(e) => setPw(e.target.value)}
					/>
				</label>
				<button type='submit' onClick={handleSubmit}>
					Submit
				</button>
			</form>
			{pwError ? (
				<div className='pw-error'>
					<p>try again! hint: savethedate <u><b><em>MMDDYY</em></b></u></p>
				</div>
			) : null}
		</div>
	)
}

export default Password
