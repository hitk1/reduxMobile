import React, { useCallback } from 'react';
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { CartButtonWrapper, CartAmountWrapper, Button } from './styles';
import { useSelector } from 'react-redux';
import { IProduct } from 'src/Screens/Home/interfaces';

const GoToCart: React.FC = () => {

    const navigation = useNavigation()

    const amount = useSelector((state: any) => state.cart.reduce((prev: number, curr: IProduct) => prev += Number(curr.amount), 0))

    const goTo = useCallback(() => {
        navigation.navigate('Cart')
    }, [])

    return (
        <CartButtonWrapper>
            {amount > 0 &&
                <CartAmountWrapper
                    style={{ zIndex: 2, elevation: 2}}
                >
                    <Text
                        style={{color: "#FFF", fontSize: 12, fontWeight: 'bold'}}
                    >{amount}</Text>
                </CartAmountWrapper>
            }
            <Button onPress={() => goTo()}>
                <Icon name="shopping-cart" size={22} color="#EEE" />
            </Button>
        </CartButtonWrapper>
    )
}

export default GoToCart;