import styled from 'styled-components';

export const StyledHome = styled.main`
	background-color: ${({ theme }) => theme.colors.darkGreen};
	height: 90vh;
	max-height: 100vh;
	color: ${({ theme }) => theme.colors.offWhite};
	padding: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	p {
		max-width: 50%;
		font-size: 1.8rem;
		margin-top: 200px;
		word-spacing: 0.3em;
		letter-spacing: 0.1em;
	}

	#icon {
		font-size: 500px;
		margin-top: 80px;
	}
`;
