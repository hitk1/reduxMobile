import React, { useCallback, useState, useEffect, memo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native'

import { IProps } from './interfaces';
import {
    Container,
    ProductImage,
    Title,
    TopWrapper,
    FavoriteIconWrapper,
    BottomWrapper,
    Price,
    ButtonAmountWrapper,
    AddToCartButton,
    ButtonText,
    AmountWrapper,
    SubButton,
    AddButton
} from './styles';
import { IProduct } from 'src/Screens/Home/interfaces';

const ProductItem: React.FC<IProps> = ({
    item,
    amount,
    addToCartFunction,
    subtractFromCartFunction }) => {

    const [myItem, setMyItem] = useState<IProduct>({ ...item, isFavorite: false, formatedPrice: item.formatedPrice })

    return (
        <Container style={{ margin: 1 }}>
            <TopWrapper>
                <FavoriteIconWrapper
                    onPress={() => {
                        setMyItem({ ...myItem, isFavorite: !myItem.isFavorite })
                    }}
                >
                    <Icon name={myItem.isFavorite ? 'favorite' : 'favorite-border'}
                        size={22}
                        color={myItem.isFavorite ? 'red' : '#000'} />
                </FavoriteIconWrapper>
                <ProductImage
                    style={{ height: 110, width: 110, resizeMode: 'stretch' }}
                    source={{ uri: myItem.image }}
                />

                <Title>{myItem.title}</Title>
            </TopWrapper>

            <BottomWrapper>
                <Price>{myItem.formatedPrice}</Price>
                {amount > 0
                    ?
                    <AmountWrapper>
                        <SubButton
                            onPress={() => { subtractFromCartFunction(item.id) }}
                        >
                            <Icon name="remove" size={16} color="#333" />
                        </SubButton>
                        <Text>{amount}</Text>
                        <AddButton
                            onPress={() => { addToCartFunction(item) }}
                        >
                            <Icon name="add" size={16} color="#333" />
                        </AddButton>
                    </AmountWrapper>
                    :
                    <ButtonAmountWrapper>
                        <AddToCartButton
                            onPress={() => { addToCartFunction(item) }}
                            style={{
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.8,
                                shadowRadius: 2,
                                elevation: 2,
                            }}
                        >
                            <ButtonText>Adicionar</ButtonText>
                        </AddToCartButton>

                    </ButtonAmountWrapper>
                }

            </BottomWrapper>
        </Container>
    )
}

export default ProductItem;