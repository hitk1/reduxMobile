import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 3px 0;
	background: #eee;
  `;

export const CheckoutWrapper = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	height: 150px;
	padding: 30px;

	margin-bottom: 7px;
	background: #FFF;
	border-radius: 16px;
`;

export const TotalWrapper = styled.View`
	height: 56px;
	align-items: center;
	justify-content: space-around;
`;

export const TotalDescription = styled.Text`
	font-size: 16px;
`;

export const TotalAmount = styled.Text`
	font-weight: bold;
	font-size: 18px;
`;

export const CheckoutButton = styled(RectButton)`
	flex-direction: row;
	align-items: center;
	justify-content: center;

	height: 56px;
	width: 190px;

	background: #3452EB;
	border-radius: 100px;
`;

export const CheckoutButtonDescription = styled.Text`
	color: #FFF;
	font-size: 16px;
	margin-right: 5px;
`;

