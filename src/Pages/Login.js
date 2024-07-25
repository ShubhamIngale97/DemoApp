import React, { useContext } from 'react';
import {  Image, ScrollView, View } from 'react-native';
import { _HEADER_TYPE } from '../Util/GlobalConstant';
import Styles from '../Styles/Styles';
import { _GLOBAL_COLORS } from '../Styles/StylesConstants';
import FormBuilder from '../component/Form/FormBuilder';
import { _FORMS } from '../component/Form/FormConfig';
import { GlobalContext } from '../../App';
import { ShowSuccessAlert } from '../Util/GlobalFunction';
import { localized } from '../component/CommonUtil/CommonUtil';

function Login(props) {
    const { setLoginStatus } = useContext(GlobalContext)

    const Dologin = (data) => {
        ShowSuccessAlert(
            flag => {setLoginStatus(false)},
            localized('success_alert_lbl'),
            localized('login_Success_lbl')
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: _GLOBAL_COLORS.WHITE }}>
            <ScrollView>
                <Image
                    source={require('../images/login_img.jpg')}
                    backgroundColor={'tintColor'}
                    style={[Styles.LogoStyle(), { marginTop: 100 }]} />
                <FormBuilder
                    formDate={_FORMS.LOGIN}
                    submitTitle={'login'}
                    onSubmitHandler={Dologin} />
            </ScrollView>
        </View>
    );
}

export default Login;