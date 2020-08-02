import React, { useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons'

import CartProductItem from '../../components/CartProductItem'
import { IProduct } from '../Home/interfaces';
import { addToCart, subtractFromCart, removeFromCart, checkoutCart } from '../../store/reducers/cart/reducer'
import { formatPrice } from '../../util/format'
import {
	Container,
	CheckoutWrapper,
	TotalWrapper,
	TotalDescription,
	TotalAmount,
	CheckoutButton,
	CheckoutButtonDescription
} from './styles';

const Cart: React.FC = () => {

	const dispatcher = useDispatch()
	const formatCurrencyBRL = useCallback((value: number) => formatPrice(value), [])

	const products = useSelector((state: any) => state.cart)
	const total = useSelector((state: any) => formatCurrencyBRL(state.cart.reduce((acc: number, curr: IProduct) => acc += curr.price * curr.amount, 0)))

	const handleAddToCart = useCallback((item: IProduct) => dispatcher(addToCart(item)), [products])
	const handleSubFromCart = useCallback((productId: number) => dispatcher(subtractFromCart(productId)), [products])
	const handleRemoveFromCart = useCallback((productId: number) => dispatcher(removeFromCart(productId)), [products])
	const handleCheckout = useCallback(() => dispatcher(checkoutCart()), [])

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
			<CheckoutWrapper>
				<TotalWrapper>
					<TotalDescription>Total:</TotalDescription>
					<TotalAmount>{total}</TotalAmount>
				</TotalWrapper>
				<CheckoutButton
					onPress={() => handleCheckout()}
				>
					<Icon
						name="chevron-right"
						color="#EEE"
						size={32}
						style={{position: 'absolute', left: 0, marginLeft: 7}}
					/>
					<CheckoutButtonDescription>Checkout</CheckoutButtonDescription>
				</CheckoutButton>
			</CheckoutWrapper>

		</Container>
	)
}

export default Cart;