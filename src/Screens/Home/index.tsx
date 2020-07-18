import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { SvgFromUri } from 'react-native-svg'

import { Container, Background } from './styles';
import { IProducts } from './interfaces';
import ProductItem from '../../components/ProductItem'
import api from '../../service/api'

const Home: React.FC = () => {

    const [products, setProducts] = useState<IProducts[]>()

    useEffect(() => {
        async function getProducts(){
            const response = await api.get('/products')
            
            if(response.data)
                setProducts(response.data)
        }

        getProducts()
    }, [])

    return (
        <Container>
            <FlatList
                data={products}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => String(item.id)}
                renderItem={({ item}) => (
                    <ProductItem item={item}/>
                )}
            />
        </Container>
    )
}

export default Home;