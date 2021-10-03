import React from "react";
import {View, Text} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText'

export class Welcome extends React.Component{
    render(){
        return(
            <View style={{
                flex:1,
                // backgroundColor:'green',
            }}>
                <HeaderText
                titles={'WELCOME TO STAT BANKING'}
                />
                <View style={{
                    height:h('85%'),
                    width: w('100%'),
                    // backgroundColor:'pink',
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                <Text> Empty Screen </Text>
                </View>
            </View>
        )
    }
}