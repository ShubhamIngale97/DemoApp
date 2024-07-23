import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { _HEADER_TYPE } from '../Util/GlobalConstant';
import Styles from '../Styles/Styles';
import { _GLOBAL_COLORS } from '../Styles/StylesConstants';
import FormBuilder from '../component/Form/FormBuilder';
import { _FORMS } from '../component/Form/FormConfig';

function Login(props) {
    const Dologin = () => {

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