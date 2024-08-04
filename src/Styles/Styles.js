import { StyleSheet } from "react-native";
import { _APP_STYLES_CONSTANTS, _GLOBAL_COLORS } from "./StylesConstants";
import { _APP_FONT_SIZE_CONSTANTS } from "./TextStyles";

export default StyleSheet.create({
  SplashScreenMain: () => ({
    flex: 1,
    alignItems: 'center',
    backgroundColor: _GLOBAL_COLORS.BACKGROUND_COLOR,
    justifyContent: 'center',
    flexDirection: 'colunm',
  }),
  SplashScreenLottie: () => ({
    width: 950,
    height: 1000,
    marginTop: '0%',
  }),
  LoginHeaderMain: () => ({
    width: '100%',
    minHeight: 65,
    backgroundColor: _GLOBAL_COLORS.APP_COLOR,
    ..._APP_STYLES_CONSTANTS.ELEVATION,
    elevation: 4,
    justifyContent: 'center',
    alignItems:'center',
    paddingHorizontal: '4%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  }),
  BoldText: () => ({
    textAlign: 'center',
    padding: 5,
    color: _GLOBAL_COLORS.BLACK,
    fontWeight: 'bold',
  }),
  LogoStyle: () => ({
    height: 300,
    width: '80%',
    resizeMode: 'contain',
    alignSelf: 'center',
  }),
  FormPageTitle: (isPortrait) => ({
    marginHorizontal: '5%',
    color: _GLOBAL_COLORS.BLACK,
    ..._APP_FONT_SIZE_CONSTANTS.LARGE,
    fontWeight: 'bold',
  }),
  ButtonStyle: (isPortrait) => ({
    backgroundColor: _GLOBAL_COLORS.APP_COLOR,
    width: '65%',
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    ..._APP_STYLES_CONSTANTS.BORDER_RADIUS,
    ..._APP_STYLES_CONSTANTS.ELEVATION,
  }),
  ButtonText: (isPortrait) => ({
    textAlign: 'center',
    ..._APP_FONT_SIZE_CONSTANTS.BUTTON,
    padding: 7,
    color: _GLOBAL_COLORS.BUTTON_TEXT,
    fontWeight: 'bold',
  }),
  ButtonStyleOuterContainer: (isPortrait) => ({
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: '2%',
    marginVertical: 10,
  }),
  TextInputThemeStyle: (isPortrait) => ({
    colors: {
      placeholder: _GLOBAL_COLORS.TEXT_COLOR_1,
      text: _GLOBAL_COLORS.TEXT_COLOR_1,
      primary: _GLOBAL_COLORS.GREY_COLOR,
      underlineColor: 'transparent',
      background: _GLOBAL_COLORS.WHITE,
    },
  }),
  AlertLottie: () => ({
    width: 150,
    height: 150,
  }),
  ScuccesAlertLottie: () => ({
    width: 180,
    height: 180,
  }),
  CustomisableAlertButtonStyle: () => ({
    backgroundColor: _GLOBAL_COLORS.APP_COLOR,
    borderColor: _GLOBAL_COLORS.APP_SECONDARY_COLOR,
    borderWidth: 0.3,
    borderRadius: 8,
  }),
  CustomisableAlertButtonLabelStyle: () => ({
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    ..._APP_FONT_SIZE_CONSTANTS.LABEL,
  }),
  CustomisableAlertButtonLeftStyle: () => ({
    backgroundColor: _GLOBAL_COLORS.APP_COLOR,
    borderColor: _GLOBAL_COLORS.APP_COLOR,
    borderWidth: 0.3,
    borderRadius: 8,
  }),
  CustomisableAlertButtonLeftRightLabelStyle: () => ({
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    ..._APP_FONT_SIZE_CONSTANTS.LABEL,
  }),
})