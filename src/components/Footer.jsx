import { StyledFooter } from '../styles/Footer';
import {
	AiFillGithub,
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiOutlineMail,
} from 'react-icons/ai';

const Footer = () => {
	return (
		<StyledFooter>
			<a
				href='https://github.com/ojcorrigan'
				target='_blank'
				rel='noopener noreferrer'
			>
				<AiFillGithub />
			</a>
			<a
				href='https://twitter.com/OwenCorrigan05'
				target='_blank'
				rel='noopener noreferrer'
			>
				<AiFillTwitterCircle />
			</a>
			<a
				href='https://www.linkedin.com/in/owen-corrigan-92a753182/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<AiFillLinkedin />
			</a>

			<a href='mailto:owen.corrigan5@gmail.com'>
				<AiOutlineMail />
			</a>
		</StyledFooter>
	);
};

export default Footer;
