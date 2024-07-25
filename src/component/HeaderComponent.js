import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { _HEADER_TYPE } from '../Util/GlobalConstant'
import Styles from '../Styles/Styles'
import { _GLOBAL_COLORS } from '../Styles/StylesConstants'

const HeaderComponent = (props) => {
    const {
        type,
        pagename,
        BackHandler,
    } = props;

    const navigation = useNavigation()

    const HeaderRender = () => {
        switch (type) {
            case _HEADER_TYPE.HOME:
                return (
                    <View style={[Styles.LoginHeaderMain(), { backgroundColor: _GLOBAL_COLORS.APP_COLOR_100 }]}>
                        <Image
                            source={require('../images/logo-color.png')}
                            style={{
                                height: 25,
                                width: 180,
                                resizeMode: "contain",
                                tintColor: _GLOBAL_COLORS.APP_SECONDARY_COLOR,
                            }}
                        />
                    </View>
                )
            case _HEADER_TYPE.PAGE:
                return (
                    <View style={Styles.LoginHeaderMain()}>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                if (BackHandler) {
                                    BackHandler()
                                } else {
                                    navigation.goBack()
                                }
                            }}
                        >
                            <FontAwesome
                                name="arrow-left"
                                size={15}
                                style={{ paddingRight: 5 }}
                                color={_GLOBAL_COLORS.BLACK}
                            />
                            <Text style={Styles.BoldText()}>
                                {pagename.toUpperCase()}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
            default:
                return (
                    <View>
                        <Text>Default</Text>
                    </View>
                )
        }
    }

    return (
        <>
            {HeaderRender()}
        </>
    )
}
export default HeaderComponent
