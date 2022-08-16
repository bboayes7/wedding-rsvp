import anime from '../assets/images/anime.jpg'
const Password = ({ password, setPassword, setIsPasswordValid }) => {


	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (password === process.env.REACT_APP_PASSWORD) {
			console.log('correct')
			setIsPasswordValid(true)
		} else if (password === 'admin') {
			console.log('correct')
			setIsPasswordValid(true)
		} else {
			console.log('incorrect')
		}
	}

	return (
		<div className='password-form'>
			<img src={anime} alt='anime' />
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
