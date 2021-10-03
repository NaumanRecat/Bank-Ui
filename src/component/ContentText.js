import React from "react";
import {View, Text} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

export class ContentText extends React.Component{
    render(){
        return(
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                marginTop: h('4%'),
            }}>
                <Text style={{
                color:'#000000',
                fontSize: h('3.7%'),
                fontWeight:'bold',
            }}> {this.props.title} </Text>
            </View>
        )
    }
}