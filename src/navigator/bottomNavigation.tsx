/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/dashboard';
import Trips from '../screens/trips';
import Delivery from '../screens/delivery';
import Orders from '../screens/orders';
import More from '../screens/more';
import {vw} from '../utils/dimension';
import {Icons} from '../assets';

type TabBarIconProps = {
  focused: boolean;
};

const Tab = createBottomTabNavigator();

const DashBoardTabIcon: React.FC<TabBarIconProps> = ({focused}) => (
  <Image
    style={[styles.icon, {tintColor: focused ? '#5698D3' : 'grey'}]}
    source={Icons.dashboard}
  />
);

const TripTabIcon: React.FC<TabBarIconProps> = ({focused}) => (
  <Image
    style={[styles.icon, {tintColor: focused ? '#5698D3' : 'grey'}]}
    source={Icons.trip}
  />
);

const DeliveryTabIcon: React.FC<TabBarIconProps> = ({focused}) => (
  <Image
    style={[styles.icon, {tintColor: focused ? '#5698D3' : 'grey'}]}
    source={Icons.delivery}
  />
);

const OrderTabIcon: React.FC<TabBarIconProps> = ({focused}) => (
  <Image
    style={[styles.icon, {tintColor: focused ? '#5698D3' : 'grey'}]}
    source={Icons.order}
  />
);

const MoreTabIcon: React.FC<TabBarIconProps> = ({focused}) => (
  <Image
    style={[styles.moreIcon, {tintColor: focused ? '#5698D3' : 'grey'}]}
    source={Icons.more}
  />
);

const BottomNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#5698D3',
        // unmountOnBlur: true,
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => <DashBoardTabIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{
          tabBarIcon: ({focused}) => <TripTabIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Delivery"
        component={Delivery}
        options={{
          tabBarIcon: DeliveryTabIcon,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: OrderTabIcon,
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: MoreTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  icon: {
    width: vw(70),
    height: vw(70),
    resizeMode: 'contain',
  },
  moreIcon:{
    width: vw(30),
    height: vw(30),
    resizeMode: 'contain',
  },
});
