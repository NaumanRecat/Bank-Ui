import React from "react";
import {View, Text, TextInput} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

export class Input extends React.Component{
    render(){
        return(
            <View style={{
                // flex:1,
                alignItems:'center',
                // justifyContent:'center',
            }}>
                <TextInput
            style={{
                height: h('8%'),
                width: w('80%'),
                borderWidth:0.5,
                borderRadius:5,
                color:'#C3D1F6',
                marginBottom: h('5%'),
            }}
            placeholder={this.props.placeholder}
            placeholderTextColor="#000000"
            />
            </View>
        )
    }
}