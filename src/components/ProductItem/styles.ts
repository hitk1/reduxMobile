import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    display: flex;
    align-items: center;

    max-width: 300px;

    background-color: #FFF;

    border-radius: 4px;
    margin: 15px 0;
`;

export const Title = styled.Text`
    margin-top: 35px;

    line-height: 20px;
    font-size: 16px;
    color: #333;
`;

export const Price = styled.Text`
    margin-top: 15px;
    font-size: 20px;
    font-weight: bold;
`;


export const ProductImage = styled.Image`
`;

export const AddToCartButton = styled(RectButton)``;

