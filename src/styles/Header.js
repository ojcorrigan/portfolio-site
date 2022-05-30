import styled from 'styled-components';

export const StyledHeader = styled.main`
	color: ${({ theme }) => theme.colors.darkGreen};
	height: 50px;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;

	h1 {
		margin-left: 20px;
	}

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.darkGreen};
		transition: ease-in 0.3s;
	}

	a:hover {
		color: ${({ theme }) => theme.colors.mainAccent};
	}

	div {
		display: flex;
		align-items: center;
	}

	button {
		background-color: white;
		border: 0;
		margin-right: 20px;
		font-size: 1.2rem;
		transition: ease-in 0.3s;
	}

	button:hover {
		color: ${({ theme }) => theme.colors.mainAccent};
	}
`;
