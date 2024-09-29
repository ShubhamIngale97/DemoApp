import React, { useContext } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { _HEADER_TYPE } from '../Util/GlobalConstant';
import Styles from '../Styles/Styles';
import { _GLOBAL_COLORS } from '../Styles/StylesConstants';
import FormBuilder from '../component/Form/FormBuilder';
import { _FORMS } from '../component/Form/FormConfig';
import { LoginUsingFireBase, ShowErrorAlert, ShowSuccessAlert } from '../Util/GlobalFunction';
import { localized } from '../component/CommonUtil/CommonUtil';



function Login(props) {

    const Dologin = (data) => {
        LoginUsingFireBase(data.uname, data.password, (flag,message) => {
            if (flag) {
                ShowSuccessAlert(
                    flag => { },
                    localized('success_alert_lbl'),
                    message
                );
            } else {
                ShowErrorAlert(
                    flag =>{},
                    localized('login_Fail_lbl'),
                    message
                  )
            }
        }); 
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