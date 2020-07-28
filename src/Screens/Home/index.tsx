import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, FlatList } from 'react-native';
import { SvgFromUri } from 'react-native-svg'

import { Container, Background } from './styles';
import { IProduct } from './interfaces';
import ProductItem from '../../components/ProductItem'
import api from '../../service/api'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, subtractFromCart } from '../../store/reducers/cart/reducer'

const numColumns = 2
const Home: React.FC = () => {

    const [products, setProducts] = useState<IProduct[]>()
    const dispatch = useDispatch()

    useEffect(() => {
        async function getProducts() {
            const response = await api.get('/products')

            if (response.data)
                setProducts(response.data)
        }

        getProducts()
    }, [])

    const amount = useSelector((state: any) => state.cart.reduce((amount: any, product: IProduct) => {
        amount[product.id] = product.amount
        return amount
    }, {}))

    const handleAddToCart = useCallback((product: IProduct) => {
        dispatch(addToCart(product))
    }, [])

    const handleSubFromCart = useCallback((id: number) => {
        dispatch(subtractFromCart(id))
    }, [])

    return (
        <Container>
            <FlatList
                data={products}
                style={{ marginHorizontal: 3 }}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <ProductItem
                        item={item}
                        amount={amount[item.id] | 0}
                        addToCartFunction={handleAddToCart}
                        subtractFromCartFunction={handleSubFromCart}
                    />
                )}
                numColumns={numColumns}
            />
        </Container>
    )
}

export default Home;