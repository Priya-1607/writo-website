import React from 'react';
import './App.css';
import Header from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Platform from './pages/platformPage/Platform.js'
import MeetOurExp from './pages/expertsPage/MeetOurExp.js'


function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
			<Platform/>
			<MeetOurExp/>
		</Router>
	);
}

export default App;
