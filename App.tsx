import React from 'react';
import 'react-native-gesture-handler'
import { StatusBar } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import './src/config/ReactotronConfig'

import Home from './src/Screens/Home'
import Cart from './src/Screens/Cart'
import GoToCart from './src/components/GoToCart'

const Stack = createStackNavigator()

const App = () => {
	return (
		<>
			<StatusBar barStyle='light-content' backgroundColor='#2E2D29' />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{
							headerStyle: {
								backgroundColor: '#333'
							},
							headerTintColor: '#FFF',
							headerRight: () => <GoToCart />
						}}
					/>

					<Stack.Screen name="Cart" component={Cart}/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};


export default App
