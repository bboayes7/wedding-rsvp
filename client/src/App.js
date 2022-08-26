import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Password from './components/Password'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Travel from './components/pages/Travel'
import Faqs from './components/pages/Faqs'
import Photos from './components/pages/Photos'
import RSVP from './components/pages/RSVP'
import Thanks from './components/pages/Thanks'
import Admin from './components/pages/Admin'
import { useState, useEffect } from 'react'
import './index.css'
import comeasyouare from './assets/music/comeasyouare.mp3'

function App() {
	const [song] = useState(new Audio(comeasyouare))
	const [playing, setPlaying] = useState(true)
	const [isPasswordValid, setIsPasswordValid] = useState(false)

	const toggleSong = () => {
		if (playing == true) {
			setPlaying(false)
			song.pause()
		} else {
			setPlaying(true)
			song.play()
		}
	}
	useEffect(() => {
		if (isPasswordValid) {
			song.play()
		}
	}, [isPasswordValid, song])

	return (
		<div className='container'>
			{isPasswordValid ? (
				<Router>
					<Header toggleSong={toggleSong} playing={playing} />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/travel' element={<Travel />} />
						<Route path='/faqs' element={<Faqs />} />
						<Route path='/photos' element={<Photos />} />
						<Route path='/rsvp' element={<RSVP />} />
						<Route path='/thanks' element={<Thanks />} />
						<Route
							path='/admin'
							element={<Admin setIsPasswordValid={setIsPasswordValid} />}
						/>
					</Routes>
					<Footer />
				</Router>
			) : (
				<Password setIsPasswordValid={setIsPasswordValid} />
			)}
		</div>
	)
}

export default App
