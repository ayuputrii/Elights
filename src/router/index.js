import React from 'react';
import {
  SignIn,
  Home,
  DetailProduct,
  Order,
  Profile,
  Checkout,
  OrderSuccess,
  EditProfile,
} from '../page';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="MainApp"
        component={MainApp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="DetailProduct"
        component={DetailProduct}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Checkout"
        component={Checkout}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="OrderSuccess"
        component={OrderSuccess}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="EditProfile"
        component={EditProfile}
      />
    </Stack.Navigator>
  );
};

export default Router;
