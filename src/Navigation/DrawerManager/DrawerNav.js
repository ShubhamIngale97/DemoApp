import React from 'react';
import { View } from 'react-native';
import Home from '../../Pages/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { _APP_STYLES_CONSTANTS } from '../../Styles/StylesConstants';
import TabNav from '../TabNav';

function DrawerNav(props) {
    const Drawer = createDrawerNavigator();


    return (
            <Drawer.Navigator initialRouteName="TabNav" screenOptions={{
                headerShown:false,
                drawerContentContainerStyle:{
                    ..._APP_STYLES_CONSTANTS.APP_BACKGROUND_COLOR
                },
                drawerPosition:'right'
            }} >
                <Drawer.Screen name='TabNav' component={TabNav} />
            </Drawer.Navigator>
    );
}

export default DrawerNav;