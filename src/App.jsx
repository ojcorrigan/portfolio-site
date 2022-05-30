import { Routes, Route } from 'react-router-dom';
//Themes
import { ThemeProvider } from 'styled-components';
import { Global } from './styles/Global';
//Components
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Work from './components/Work';
import Contact from './components/Contact';

const theme = {
	colors: {
		offWhite: '#ECEBE4',
		darkGreen: '#3A4E48',
		greyGreen: '#6A7B76',
		mainAccent: '#EC9A29',
		secondAccent: '#E88873',
		darkBlue: '#293241',
	},
};

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Global />
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/work' element={<Work />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<Home />} />
			</Routes>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
