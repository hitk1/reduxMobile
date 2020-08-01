import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const imageHeight = '125px'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  margin: 5px 5px 0 5px;
  height: 125px;
  background: #FFF;
  border-radius: 4px;
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
  /* flex-direction: row; */
  align-items: center;
  justify-content: space-around;

  width: 50px;
  height: ${imageHeight};

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

export const SubButton = styled(buttonStyle)``;

export const Amount = styled.Text``;

export const AddButton = styled(buttonStyle)``;

export const RemoveButton = styled(RectButton)`
  position: absolute;
  right: 0;
  top: 0;
  
  height: ${imageHeight};
  width: 50px;

  background: #FC3366;
  
  align-items: center;
  justify-content: center;
`;
