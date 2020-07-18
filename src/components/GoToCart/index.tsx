import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Button } from './styles';

const GoToCart: React.FC = () => {

    const navigation = useNavigation()

    const goTo = useCallback(() => {
        navigation.navigate('Cart')
    }, [])

    return (
        <Button onPress={() => goTo()}>
            <Icon name="shopping-cart" size={22} color="#EEE" />
        </Button>
    )
}

export default GoToCart;