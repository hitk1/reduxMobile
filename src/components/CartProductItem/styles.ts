import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const imageHeight = '125px'

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  margin: 5px 10px 0 10px;

  height: 125px;
`;

export const ProductDescriptionWrapper = styled.View`
  align-items: flex-start;
  justify-content: space-around;

  width: ${Math.floor(Dimensions.get('window').width / 2.7)}px;
  height: ${imageHeight};

  margin-left: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-weight: bold;
`;

export const QuantityWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 80px;

  /* border: 1px solid #333;
  border-radius: 100px;
  background: #FFF; */
`;

const buttonStyle = styled(RectButton)`
  height: 25px;
  width: 25px;

  border-radius:100px;
  background: #999;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SubButton = styled(buttonStyle)`
  
`;

export const Amount = styled.Text``;

export const AddButton = styled(buttonStyle)``;

export const RemoveButton = styled(RectButton)`
  height: 30px;
  width: 30px;

  background: #FC3366;
  border-radius: 100px;
  
  align-items: center;
  justify-content: center;
`;
