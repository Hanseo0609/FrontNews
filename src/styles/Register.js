import styled from "styled-components";

export const LogoImg = styled.img`
	display: block;
  	width: 250px;
	margin: 84px auto 96px auto;
`;

export const Wrapper = styled.div`
	margin-top: 100px;
	padding: 24px;
	border: 1px solid lightgrey;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 500px;
	height: 900px;
	border-radius: 15px;
	box-sizing: border-box;
`;

export const SummitBtn = styled.button`
	background-color: #FDCB02;
	width: 452px;
	height: 40px;
	border: none;
	border-radius: 5px;
	font-weight: bold;
	cursor: pointer;
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
	width: 350px;
	height: 40px;
	border: 1px solid lightgrey;
	border-radius: 5px;
`;

export const EmailConfirmBtn = styled.button`
	width: 85px;
	height: 45px;
	margin-left: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	
`;

export const InputConfirmCode = styled.input`
	margin-top: 8px;
	margin-bottom: 24px;
	width: 450px;
	height: 40px;
	border: 1px solid lightgrey;
	border-radius: 5px;
	display: ${(props) => (props.visible ? 'block' : 'none')};
`;

export const InputDefault2 = styled.input`
	margin-top: 8px;
	margin-bottom: 24px;
	width: 452px;
	height: 40px;
	border: 1px solid lightgrey;
	border-radius: 5px;
`;

export const SelectBox = styled.select`
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 450px;
  padding: 12px;
  margin: 0px;
`;

export const registerText = styled.p`
	margin-top: -12px;
	color: gray;
`;