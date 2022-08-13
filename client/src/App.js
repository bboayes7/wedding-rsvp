import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Password from './components/Password'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Travel from './components/pages/Travel'
import Faqs from './components/pages/Faqs'
import Photos from './components/pages/Photos'
import { useState, useEffect } from 'react'
import './index.css'
import comeasyouare from './assets/music/comeasyouare.mp3'

function App() {
	const [song] = useState(new Audio(comeasyouare))
	const [password, setPassword] = useState('')
	const [isPasswordValid, setIsPasswordValid] = useState(false)

	useEffect(() => {
		if (isPasswordValid) {
			song.play()
		} else {
			song.pause()
		}
	}, [isPasswordValid, song])

	return (
		<div className='container'>
			{/* {isPasswordValid ? (
				<Router>
					<Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/travel' element={<Travel />} />
			<Route path='/faqs' element={<Faqs />} />
          </Routes>
					<Footer />
				</Router>
			) : (
				<Password
					password={password}
					setPassword={setPassword}
					setIsPasswordValid={setIsPasswordValid}
				/>
			)} */}
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/travel' element={<Travel />} />
					<Route path='/faqs' element={<Faqs />} />
					<Route path='/photos' element={<Photos />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
