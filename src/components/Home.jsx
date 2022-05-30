import React from 'react';
import { StyledHome } from '../styles/Home';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

const Home = () => {
	return (
		<StyledHome>
			<p>
				Welcome to my online portfolio. My name is Owen Corrigan I'm a junior
				full stack developer having recently graduated from the Northcoders
				Developer Bootcamp. I'm new to software development, having worked in
				retail and broadcast media for the past 16 years. I'm looking to develp
				my skills and start my new career in development.
			</p>
			<div>
				<HiOutlineDesktopComputer id='icon' />
			</div>
		</StyledHome>
	);
};

export default Home;
