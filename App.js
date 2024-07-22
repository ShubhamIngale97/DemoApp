import React, { Fragment, useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';  // Import NavigationContainer
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './component/SplashScreen';
import LoginNav from './Navigation/LoginNav';
import { _GLOBAL_COLORS } from './Styles/StylesConstants';

function App(props) {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const splashScreen = setTimeout(() => {
      setShowSplashScreen(false);
      StatusBar.setHidden(false);
    }, 3000);

    return () => {
      clearTimeout(splashScreen);
    };
  }, []);

  return (
    <Fragment>
      
        <StatusBar
          backgroundColor={_GLOBAL_COLORS.BLACK}
        />
        {showSplashScreen ? (
          <View style={{ flex: 1 }}>
            <SplashScreen />
          </View>
        ) : (
          <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: showSplashScreen ? _GLOBAL_COLORS.BACKDROP_COLOR : _GLOBAL_COLORS.BLACK
        }}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName='LoginNav'
              screenOptions={{
                headerShown: false,
                contentStyle: {
                  backgroundColor: _GLOBAL_COLORS.WHITE,
                },
              }}
            >
              <Stack.Screen name='LoginNav' component={LoginNav} />
            </Stack.Navigator>
          </NavigationContainer>
          </SafeAreaView>
        )}
     
    </Fragment>
  );
}

export default App;
