import styled from 'styled-components';

export const StyledWork = styled.main`
	background-color: ${({ theme }) => theme.colors.darkGreen};
	height: 90vh;
	max-height: 100vh;
	color: ${({ theme }) => theme.colors.offWhite};
	padding: 20px;
	display: flex;
	justify-content: center;

	#pushskill {
		width: 80vw;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	#pushskill div {
		max-width: 400px;
		margin-top: 20px;
		margin-right: 50px;
		margin-left: 50px;
	}

	img {
		width: 1152px;
		height: 564px;
		margin-top: 20px;
	}

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.secondAccent};
		transition: ease-in 0.2s;
	}

	a:hover {
		color: ${({ theme }) => theme.colors.offWhite};
	}

	h2 {
		margin-bottom: 20px;
	}

	h3 {
		margin-bottom: 5px;
		font-weight: bold;
		letter-spacing: 0.06em;
	}

	p {
		margin-bottom: 10px;
		text-align: justify;
	}
`;
