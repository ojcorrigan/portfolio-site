import styled from 'styled-components';

export const StyledFooter = styled.main`
	background-color: ${({ theme }) => theme.colors.darkBlue};
	height: 100px;
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 0;
	display: flex;
	flex-direction: row;
	justify-content: center;

	a {
		color: ${({ theme }) => theme.colors.offWhite};
		font-size: 60px;
		height: 100%;
		align-content: center;
		margin: 20px 30px;
		transition: ease-in 0.3s;
	}

	a:hover {
		color: ${({ theme }) => theme.colors.mainAccent};
	}
`;
