import welcome from '../assets/images/welcome.gif'
const Password = ({ password, setPassword, setIsPasswordValid }) => {
	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (password === process.env.REACT_APP_PASSWORD) {
			console.log('correct')
			setIsPasswordValid(true)
		} else {
			console.log('incorrect')
		}
	}

	return (
		<div className='password-form'>
			<img src={welcome} alt='welcome gif' />
			<h1>Enter the password to view the website:</h1>
			<form>
				<label>
					<input
						type='password'
						placeholder='Password'
						onChange={handlePassword}
					/>
				</label>
				<button type='submit' onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	)
}

export default Password
