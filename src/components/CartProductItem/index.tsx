import React, { memo } from 'react';
import { Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5'

import { IProps } from './interfaces';
import {
    Container,
    ProductDescriptionWrapper,
    ProductTitle,
    ProductPrice,
    QuantityWrapper,
    SubButton,
    Amount,
    AddButton,
    RemoveButton
} from './styles';

const CartProductItem: React.FC<IProps> = ({
    item,
    addToCartFunction,
    subtractFromCartFunction,
    removeFromCartFunction
}) => {
    return (
        <Container>
            <Image
                source={{ uri: item.image }}
                style={{
                    height: 120,
                    width: 120,
                    resizeMode: 'stretch',
                    borderRadius: 4,
                    marginRight: 3
                }}
            />
            <ProductDescriptionWrapper>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.formatedPrice}</ProductPrice>
            </ProductDescriptionWrapper>
            <QuantityWrapper>

                <AddButton
                    onPress={() => addToCartFunction(item)}
                >
                    <MaterialIcons name="add" size={16} color="#FFF" />
                </AddButton>
                <Amount>{item.amount}</Amount>
                <SubButton
                    onPress={() => subtractFromCartFunction(item.id)}
                >
                    <MaterialIcons name="remove" size={16} color="#FFF" />
                </SubButton>
            </QuantityWrapper>

            <RemoveButton
                onPress={() => removeFromCartFunction(item.id)}
            >
                <FontAwesomeIcons name="trash-alt" size={22} color="#FFF"
                // style={{ position: 'absolute', right: 0 }} 
                />
            </RemoveButton>
        </Container>
    )
}

export default memo(CartProductItem)