import React from 'react';
import { View } from 'react-native';
import Home from '../../Pages/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';

function DrawerNav(props) {
    const Drawer = createDrawerNavigator();


    return (
            <Drawer.Navigator initialRouteName="Home" >
                <Drawer.Screen name='Home' component={Home} />
            </Drawer.Navigator>
    );
}

export default DrawerNav;