import {View, Text} from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Setting from '../screens/DrawerScreen/Setting';
import TabNavigator from './TabNavigator';
import StartScreen from '../screens/StartScreen';
import DetailScreen from '../screens/TabScreen/DetailScreen';
import OrderScreen from '../screens/TabScreen/OrderScreen';
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{paddingTop: 50, paddingLeft: 20, paddingBottom: 20}}>
        <Text>Drawer Header</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeTab"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="StartScreen"
        component={StartScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
