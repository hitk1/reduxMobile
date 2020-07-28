import styled from 'styled-components/native';

export const CartButtonWrapper = styled.View`
`;

export const CartAmountWrapper = styled.View`
    height: 20px;
    width: 20px;
    position: absolute;
    top: -13px;
    right: 0;
    border-radius: 100px;
    align-self: flex-end;

    background: red;
    margin-right: 5px;

    display: flex;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    margin-right: 15px
`;
