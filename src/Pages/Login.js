import React, { useContext } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { _HEADER_TYPE } from '../Util/GlobalConstant';
import Styles from '../Styles/Styles';
import { _GLOBAL_COLORS } from '../Styles/StylesConstants';
import FormBuilder from '../component/Form/FormBuilder';
import { _FORMS } from '../component/Form/FormConfig';
import { GlobalContext } from '../../App';
import { ShowSuccessAlert } from '../Util/GlobalFunction';
import { localized } from '../component/CommonUtil/CommonUtil';
import auth from '@react-native-firebase/auth';


function Login(props) {
    const { setLoginStatus } = useContext(GlobalContext)

    const Dologin = (data) => {
        auth()
            .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
            .then(() => {
                console.log('User account created & signed in!');
                ShowSuccessAlert(
                    flag => { setLoginStatus(false) },
                    localized('success_alert_lbl'),
                    localized('login_Success_lbl')
                )
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                console.error(error);
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