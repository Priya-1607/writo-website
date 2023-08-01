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
import Footer from './components/Footer/Footer';
import Section from './components/Section/Section';
import MeetOurExp from './components/ExpertComponent/MeetOurExp';
import Platform from './components/ExpertComponent/Platform';
import Card from './components/card';
import CardBase from './components/card/card-base';
import MySwiper from './components/Swiper';




function App() {
	return (
	
		<Router>
			
			<Header />
			<Section/>
			<Platform/> 
			<CardBase/>
			<MeetOurExp/> 
			<MySwiper/>
			
			
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/sign-up' element={<SignUp />} />
			</Routes>
			
			<Footer></Footer>
			
		</Router>
		
	);
}

export default App;
