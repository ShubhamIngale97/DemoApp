import React, { Fragment, createContext, useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';  // Import NavigationContainer
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/component/SplashScreen';
import LoginNav from './src/Navigation/LoginNav';
import { _GLOBAL_COLORS } from './src/Styles/StylesConstants';
import Styles from './src/Styles/Styles';
import CustomisableAlert from 'react-native-customisable-alert';
import { _APP_FONT_SIZE_CONSTANTS } from './src/Styles/TextStyles';
import DrawerNav from './src/Navigation/DrawerManager/DrawerNav';


export const GlobalContext = createContext({
  setLoginStatus: () => { },
})

function App(props) {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const Stack = createNativeStackNavigator();
  const [isLogin, setIsLogin] = useState(true);


  useEffect(() => {
    const splashScreen = setTimeout(() => {
      setShowSplashScreen(false);
      StatusBar.setHidden(false);
    }, 3000);

    return () => {
      clearTimeout(splashScreen);
    };
  }, []);

  const setLoginStatus = (flag) => {
    setIsLogin(flag)
  }

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
          <GlobalContext.Provider value={{
            setLoginStatus
          }}>
            {isLogin ?
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
              </NavigationContainer> :
              <NavigationContainer>
                <Stack.Navigator
                  screenOptions={{
                    headerShown: false,
                    contentStyle: {
                      backgroundColor: _GLOBAL_COLORS.WHITE,
                    },
                  }}
                >
                  <Stack.Screen name='DrawerNav' component={DrawerNav} />
                </Stack.Navigator>
              </NavigationContainer>
            }
          </GlobalContext.Provider>
          <CustomisableAlert
            titleStyle={{
              ..._APP_FONT_SIZE_CONSTANTS.HEADER,
            }}
            btnStyle={Styles.CustomisableAlertButtonStyle()}
            btnLeftStyle={Styles.CustomisableAlertButtonLeftStyle()}
            btnLabelStyle={Styles.CustomisableAlertButtonLabelStyle()}
            btnLeftLabelStyle={Styles.CustomisableAlertButtonLeftRightLabelStyle()}
            btnRightLabelStyle={Styles.CustomisableAlertButtonLeftRightLabelStyle()}
          />
        </SafeAreaView>
      )}
    </Fragment>
  );
}

export default App;
