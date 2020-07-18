import React from 'react';
import { Text } from 'react-native';
import { IProps } from './interfaces';

import { Container, ProductImage, Title, Price, AddToCartButton } from './styles';

const ProductItem: React.FC<IProps> = ({ item }) => {
    return (
        <Container>
            <ProductImage 
            style={{ height: 210, width: 210, resizeMode: 'stretch' }}
            source={{ uri: item.image }}
            />

            <Title>{item.title}</Title>
            <Price>R${item.price}</Price>

            <AddToCartButton>
                <Text>Adicionar</Text>
            </AddToCartButton>
        </Container>
    )
}

export default ProductItem;