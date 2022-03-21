import Container from '@mui/material/Container';
import Header from './components/Header.js';
import SearchList from './components/SearchList';
import { Route, Routes } from 'react-router-dom';

import Detail from './routes/Detail.js';
import NotFound from './routes/NotFound';
import Home from './routes/Home.js';
import Search from './routes/Search.js';



const App = () => {

	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path=""  element={<Home />}  /> 
				<Route path="/Movie_Database"  element={<Home />}  /> 
				<Route path="search" element={<Search />} /> 
				<Route path="/detail/:id" element={<Detail />} /> 
				<Route path="*" element={<NotFound />} /> 
			</Routes>

		</div>
	);
}

export default App;
