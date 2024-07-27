import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  _APP_STYLES_CONSTANTS,
  _GLOBAL_COLORS,
} from "../Styles/StylesConstants.js";
import {
  getFocusedRouteNameFromRoute,
  
} from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Profile from "../Pages/Profile.js";
import { Text } from "react-native";
import { _APP_FONT_SIZE_CONSTANTS } from "../styles/TextStyles";
import HomeNav from "./HomeNav.js";

const Tab = createBottomTabNavigator();

const NullComp = () => {
  return null;
};
const DrawerOpener = ({ navigation }) => ({
  tabPress: (e) => {
    e.preventDefault();
    navigation.openDrawer();
  },
});

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeNav"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: _GLOBAL_COLORS.APP_COLOR,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        contentStyle: { ..._APP_STYLES_CONSTANTS.APP_BACKGROUND_COLOR },
        tabBarStyle: {
          backgroundColor: _GLOBAL_COLORS.APP_COLOR_100,
          elevation: 0,
        },
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              style={{
                fontSize: 10,
                color:
                  focused && getFocusedRouteNameFromRoute(route) === 'Home'
                    ? _GLOBAL_COLORS.APP_COLOR
                    : '#4D4D4FCC',
              }}
            >
              {'Home'}
            </Text>
          )
        },
        tabBarIcon: ({ color, size, focused }) => {
          return (
            <FontAwesome
              name="home"
              color={
                focused && getFocusedRouteNameFromRoute(route) === 'Home'
                  ? _GLOBAL_COLORS.APP_COLOR
                  : '#4D4D4FCC'
              }
              size={25}
            />
          )
        },
      })}
    >
      <Tab.Screen
        name="HomeNav"
        component={HomeNav}
        options={{}}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault()
            global.HomefeatureCode = undefined
            navigation.navigate('Home')
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="user"
              color={focused ? _GLOBAL_COLORS.APP_COLOR : '#4D4D4FCC'}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CustomDrawer"
        component={NullComp}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="navicon"
              color={focused ? _GLOBAL_COLORS.APP_COLOR : '#4D4D4FCC'}
              size={22}
            />
          ),
        }}
        listeners={DrawerOpener}
      />
    </Tab.Navigator>
  )
};

export default TabNav;
