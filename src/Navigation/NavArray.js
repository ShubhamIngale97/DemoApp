import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../Pages/Profile"
import HomeNav from "./HomeNav"

const Tab = createBottomTabNavigator();

const NullComp = () => {
  return null;
};


export const _TAB_ARRAY = [
    {
      route: 'HomeNav',
      label: 'home_lbl',
      iconType: 'MaterialCommunityIcons',
      activeIconName: 'home-circle',
      inActiveIconName: 'home-circle-outline',
      component: HomeNav
    },
    {
      route: 'Profile',
      label: 'profile_lbl',
      iconType: 'FontAwesome',
      activeIconName: 'user',
      inActiveIconName: 'user-o',
      component: Profile
    },
    {
      route: 'NullComp',
      label: 'more_lbl',
      iconType: 'AntDesign',
      activeIconName: 'menuunfold', // Corrected icon name
      inActiveIconName: 'menu-fold', // Corrected icon name
      component: NullComp
    }
  ];
export const _DRAWER_ARRAY = [

]
