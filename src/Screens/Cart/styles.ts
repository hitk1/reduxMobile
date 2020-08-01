import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    padding: 3px 0;
	background: #eee;
  `;


export const ItemSeparator = styled.View`
	height: 1px;
	background: #333;
	margin: 2px 10px;

	/* width: ${Dimensions.get('screen').width * 0.9}px; */
`;
