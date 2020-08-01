import React, { useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Container, ItemSeparator } from './styles';
import CartProductItem from '../../components/CartProductItem'
import { IProduct } from '../Home/interfaces';
import { addToCart, subtractFromCart, removeFromCart } from '../../store/reducers/cart/reducer'
import { formatPrice } from '../../util/format'

const Cart: React.FC = () => {

	const dispatcher = useDispatch()
	const formatCurrencyBRL = useCallback((value: number) => formatPrice(value), [])

	const products = useSelector((state: any) => state.cart)
	const total = useSelector((state: any) => formatCurrencyBRL(state.cart.reduce((acc: number, curr: IProduct) => acc += curr.price * curr.amount, 0)))

	const handleAddToCart = useCallback((item: IProduct) => dispatcher(addToCart(item)), [products])
	const handleSubFromCart = useCallback((productId: number) => dispatcher(subtractFromCart(productId)), [products])
	const handleRemoveFromCart = useCallback((productId: number) => dispatcher(removeFromCart(productId)), [products])

	return (
		<Container>
			<FlatList
				data={products}
				maxToRenderPerBatch={3}
				showsVerticalScrollIndicator={false}
				keyExtractor={item => String(item.id)}
				// ItemSeparatorComponent={() => (<ItemSeparator />)}
				renderItem={({ item }) => (
					<CartProductItem
						item={item}
						addToCartFunction={handleAddToCart}
						subtractFromCartFunction={handleSubFromCart}
						removeFromCartFunction={handleRemoveFromCart}
					/>
				)}
			/>

		</Container>
	)
}

export default Cart;