import React from 'react';
import { View } from 'react-native';
import HeaderComponent from '../component/HeaderComponent';
import { _HEADER_TYPE } from '../Util/GlobalConstant';

function Login(props) {
    return (
        <View>
            <HeaderComponent
                type={_HEADER_TYPE.LOGIN}
            />
        </View>
    );
}

export default Login;