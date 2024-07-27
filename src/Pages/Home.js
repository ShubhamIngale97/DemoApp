import React from 'react';
import { View } from 'react-native';
import HeaderComponent from '../component/HeaderComponent';
import { _HEADER_TYPE } from '../Util/GlobalConstant';
import { localized } from '../component/CommonUtil/CommonUtil';

function Home(props) {
    return (
       <View>
       <HeaderComponent
       type={_HEADER_TYPE.HOME}
       pagename={localized('home_lbl')}
       /> 
       </View>
    );
}

export default Home;