import { Dimensions } from 'react-native'
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

const HEIGHT = Dimensions.get('window').height

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 3px;
    height: ${Math.floor(HEIGHT / 2.3)}px;
    background-color: #FFF;
    border-radius: 8px;
`;

export const FavoriteIconWrapper = styled(RectButton)`
    height: 30px;
    width: 30px;

    background: #FFF;
    border-radius: 100px;
    
    align-self: flex-end;
    margin: 7px 7px 0 0;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TopWrapper = styled.View`
    flex: 1;
    align-items: center;
`;

export const ProductImage = styled.Image`
    margin: 0 0 7px;
`;

export const Title = styled.Text`
    line-height: 20px;
    margin: 0 3px;

    text-align: center;
    font-size: 15px;
    color: #333;
`;

export const BottomWrapper = styled.View`
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const Price = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const ButtonAmountWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const AddToCartButton = styled(RectButton)`
    padding: 10px 20px;
    border-radius: 4px;
    background-color: #3452eb;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
`;

export const AmountWrapper = styled.View`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background: #FFF;

    height: 35px;
    width: 130px;
    padding: 5px 7px;
    border: 1px solid #333;
    border-radius: 15px;
`;

export const SubButton = styled(RectButton)`
    border-radius: 100px;

    padding: 5px;
    display: flex;
    align-items: center;
`;

export const AddButton = styled(RectButton)`
    border-radius: 100px;

    padding: 5px;
    display: flex;
    align-items: center;
`;


