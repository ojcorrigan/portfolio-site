import { StyledHeader } from '../styles/Header';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<StyledHeader>
			<Link to='/'>
				<h1>Owen Corrigan</h1>
			</Link>
			<div>
				<Link to='/work'>
					<button>Work</button>
				</Link>
				<Link to='Contact'>
					<button>Contact</button>
				</Link>
			</div>
		</StyledHeader>
	);
};

export default Header;
