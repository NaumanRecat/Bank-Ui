import React from "react";
import {View, Text} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

export class HeaderText extends React.Component{
    render(){
        return(
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                marginTop: h('4%'),
            }}>
                <Text style={{
                color:'#2563EA',
                fontSize: h('3.5%'),
                fontWeight:'600',
                fontFamily: 'Poppins',
            }}> {this.props.titles} </Text>
            </View>
        )
    }
}