import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/TabScreen/Home';
import Profile from '../screens/TabScreen/Profile';
import Cart from '../screens/TabScreen/Cart';
import Favorite from '../screens/TabScreen/Favorite';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailScreen from '../screens/TabScreen/DetailScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          return (
            <Ionicons
              name={iconName ?? 'home-icon'}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: () => null, // Hilangkan label tab
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Cart" component={Cart} options={{headerShown: false}} />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{headerShown: false}}
      />
      {/* <Tab.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
