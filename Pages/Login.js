import React from 'react';
import { Image, View } from 'react-native';
import HeaderComponent from '../component/HeaderComponent';
import { _HEADER_TYPE } from '../Util/GlobalConstant';
import Styles from '../Styles/Styles';
import { _GLOBAL_COLORS } from '../Styles/StylesConstants';

function Login(props) {
    return (
        <View style={{flex:1,backgroundColor:_GLOBAL_COLORS.WHITE}}>
            <Image
            source={require('../images/login_img.jpg')}
            backgroundColor={'tintColor'}
            style={[Styles.LogoStyle(),{marginTop:100}]}/>
        </View>
    );
}

export default Login;