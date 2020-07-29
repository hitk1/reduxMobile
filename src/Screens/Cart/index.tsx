import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import CartProductItem from '../../components/CartProductItem'

const Cart: React.FC = () => {

  const products = useSelector((state: any) => state)

  return (
    <Container>
      {(products) &&
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products.cart}
          // ItemSeparatorComponent={() => (
          //   <View style={{ height: 1, backgroundColor: '#000'}} />
          // )}
          renderItem={({ item }) => (
            <CartProductItem
              item={item}
              addToCartFunction={() => {}}
              subtractFromCartFunction={() => {}}
              removeFromCartFunction={() => {}}
            />
          )}
        />
      }
    </Container>
  )
}

export default Cart;