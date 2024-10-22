import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator'; // Import TabNavigator
// import DetailExample from '../screens/Detail/DetailExample';
import DrawerNavigator from './DrawerNavigator';
import StartScreen from '../screens/StartScreen';
import Cart from '../screens/TabScreen/Cart';
import Favorite from '../screens/TabScreen/Favorite';
import DetailScreen from '../screens/TabScreen/DetailScreen';
import OrderScreen from '../screens/TabScreen/OrderScreen';
// import DetailExample2 from '../screens/Detail/DetailExample2';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Favorite"
          component={Favorite}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
