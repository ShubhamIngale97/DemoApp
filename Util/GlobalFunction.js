import { _ICON_TYPE } from "./GlobalConstant"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { _GLOBAL_COLORS } from "../Styles/StylesConstants";

export const GetRenderIcons = (iconType, name, size = 20, color = _GLOBAL_COLORS.BUTTON_COLOR, style = { marginRight: I18nManager.isRTL ? '5%' : '5%' }) => {
    switch (iconType) {
      case _ICON_TYPE.FONTAWESOME:
        return (
          <FontAwesome
            name={name}
            size={size}
            color={color}
            style={style}
          />
        )
      case _ICON_TYPE.FONTAWESOME5:
        return (
          <FontAwesome5
            name={name}
            size={size}
            color={color}
            style={style}
          />
        )
      case _ICON_TYPE.FONTAWESOME6:
        return (
          <FontAwesome6
            name={name}
            size={size}
            color={color}
            style={style}
          />
        )
      case _ICON_TYPE.ANTDESIGN:
        return (
          <AntDesign
            name={name}
            size={size}
            color={color}
            style={style}
          />
        )
      case _ICON_TYPE.MATERIALCOMMUNITYICONS:
        return (
          <MaterialCommunityIcons
            name={name}
            size={size}
            color={color}
            style={style}
          />
        )
      case _ICON_TYPE.ENTYPO:
        return (
          <Entypo
            name={name}
            size={size}
            color={color}
            style={style}
          />
        )
      case _ICON_TYPE.IONICONS:
        return (
          <Ionicons
            name={name}
            size={size}
            color={color}
            style={style}
          />
        )
      case _ICON_TYPE.MATERIALICON:
        return (
          <MaterialIcons
            name={name}
            size={size}
            color={color}
            style={style}
          />
        )
      case _ICON_TYPE.FONTISTO:
        return (
          <Fontisto
            name={name}
            size={size}
            color={color}
            style={style}
          />
        )
      default:
        return (
          <Entypo
            name={'grid'}
            size={size}
            color={color}
            style={style}
          />
        )
    }
  }