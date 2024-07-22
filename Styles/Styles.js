import { StyleSheet } from "react-native";
import { _APP_STYLES_CONSTANTS, _GLOBAL_COLORS } from "./StylesConstants";

export default StyleSheet.create({
    SplashScreenMain: () => ({
        flex: 1,
        alignItems: 'center',
        backgroundColor: _GLOBAL_COLORS.BACKGROUND_COLOR,
        justifyContent:  'center',
        flexDirection:  'colunm',
      }),
      SplashScreenLottie: () => ({
        width: 950,
        height: 950,
        marginTop: '0%',
      }),
      LoginHeaderMain: () => ({
        width: '100%',
        minHeight: 65,
        backgroundColor: _GLOBAL_COLORS.APP_COLOR,
        ..._APP_STYLES_CONSTANTS.ELEVATION,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
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
        height:  300,
        width:  '80%',
        resizeMode: 'contain',
        alignSelf: 'center',
      }),
      
})