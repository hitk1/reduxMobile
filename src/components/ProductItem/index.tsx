import React, { useCallback, useState, useEffect } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { IProps, IMyItems } from './interfaces';
import { IProducts } from 'src/Screens/Home/interfaces';

import { Container, ProductImage, Title, TopWrapper, FavoriteIconWrapper, BottomWrapper, Price, ButtonAmountWrapper, AddToCartButton, ButtonText } from './styles';

const ProductItem: React.FC<IProps> = ({ item }) => {

    const [myItem, setMyItem] = useState<IMyItems>({...item, isFavorite: false})

    const addToCart = useCallback(() => {

    }, [])

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
                <Price>R$ {myItem.price}</Price>
                <ButtonAmountWrapper>
                    <AddToCartButton
                        onPress={() => addToCart()}
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
            </BottomWrapper>
        </Container>
    )
}

export default ProductItem;