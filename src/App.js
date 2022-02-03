import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {About, Blog, Contact, Footer, Home, Navigation, Post, Posts} from "./components";

function App() {
	return (
		<Router>
			<Navigation/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/contact" element={<Contact/>}/>
				<Route path="/blog" element={<Blog/>}>
					<Route path="" element={<Posts/>}/>
					<Route path=":postSlug" element={<Post/>}/>
				</Route>
			</Routes>
			<Footer/>
		</Router>
	);
}

export default App;
