import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlobalContext } from '../../App';
import Styles from '../Styles/Styles';
import { _deleteData, GetRenderIcons, ShowWarningAlert } from '../Util/GlobalFunction';
import { _ASYNC_KEYS, _ICON_TYPE } from '../Util/GlobalConstant';
import { _GLOBAL_COLORS } from '../Styles/StylesConstants';
import { localized } from '../component/CommonUtil/CommonUtil';

function DrawerNavContent(props) {
    const { setLoginStatus } = useContext(GlobalContext)

    const renderProfileView = () => {
        return (
            <View
                style={style.profile}
            >

            </View>
        )
    }
    const renderDrawerMenuView = () => {
        return (
            <View
                style={style.drawerMenu}
            >

            </View>
        )
    }

    return (
        <View style={{
            flex: 1
        }}>
            {renderProfileView()}
            {renderDrawerMenuView()}
            <View
                style={{
                    height: 'auto',
                    justifyContent: 'flex-end',
                    paddingBottom: '10%',
                    paddingTop: '5%',
                    marginTop: '5%'
                }}
            >
                <TouchableOpacity
                    style={[
                        Styles.ButtonStyle(),
                        { flexDirection: 'row', alignItems: 'center', },
                    ]}
                    onPress={() => {
                        ShowWarningAlert(flag => {
                            if (flag) {
                                _deleteData(_ASYNC_KEYS.IS_LOGGED_IN,(Data)=>{
                                    setLoginStatus(true)
                                })
                            }
                        },
                            localized('logout_lbl'),
                            localized('do_you_want_to_logout_lbl'))
                    }}>
                    {GetRenderIcons(_ICON_TYPE.MATERIALCOMMUNITYICONS, "logout", undefined, _GLOBAL_COLORS.APP_COLOR)}
                    <Text style={Styles.ButtonText()}>{localized('logout_lbl').toUpperCase()}</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default DrawerNavContent;

const style = StyleSheet.create({
    profile: {
        height: '10%',
        backgroundColor: _GLOBAL_COLORS.APP_COLOR_LITE
    },
    drawerMenu: {
        height: '80%',
    }
})