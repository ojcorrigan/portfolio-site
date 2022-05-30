import { StyledWork } from '../styles/Work';

const Work = () => {
	return (
		<StyledWork>
			<div id='pushskill'>
				<div>
					<a
						href='https://pushskill.netlify.app/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<h2>.Push(skill)</h2>
					</a>
					<h3>Description:</h3>
					<p>
						.push(skill) was created as a platform to help anyone who wants to
						self learn a new skill. It allows them to pair up with someone who
						can encourage them and hold them accountable to goals they have set
						themselves. Users can also gain achievements as a way of gamify-ing
						the learning experience. Ultimately the goal is to create a
						community of like minded people that can lift each other up and help
						them achieve individual goals. This app was created in the group
						project phase of the Northcoders Developer Bootcamp<br></br>
					</p>
					<h3>Tech:</h3>
					<ul>
						<li>React</li>
						<li>Socket.io</li>
						<li>Axios</li>
						<li>Express</li>
						<li>MongoDB</li>
						<li>JWT</li>
						<li>Bcrypt</li>
						<li>Styled Components</li>
					</ul>
				</div>
				<img src='/images/pushskill.png'></img>
			</div>
		</StyledWork>
	);
};

export default Work;
