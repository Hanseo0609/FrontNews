import styled from "styled-components";

export const LogoImg = styled.img`
	display: block;
  	width: 250px;
	margin: 84px auto 96px auto;
`;

export const Wrapper = styled.div`
	margin-top: 120px;
	padding: 24px;
	border: 1px solid lightgrey;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 500px;
	height: 322px;
	border-radius: 15px;
	box-sizing: border-box;

	button {
		background-color: #FDCB02;
		width: 452px;
		height: 40px;
		border: none;
		border-radius: 5px;
		font-weight: bold;
		cursor: pointer;
	}

`;

export const InputWarpper = styled.div`

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	
`;
export const OptionWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
	a {
		color: gray;
		margin-right: 2px;
		&::before {
			margin-right: 2px;
			content: "|";
			display: inline-block;
		}
		&:first-child::before {
			content: none;
		}
	}
`;

export const InputDefault = styled.input`
	margin-top: 8px;
	margin-bottom: 24px;
	width: 452px;
	height: 40px;
	border: 1px solid lightgrey;
	border-radius: 5px;
`;
