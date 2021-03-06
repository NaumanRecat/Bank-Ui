import React from "react";
import {View, Text,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

export class Btn extends React.Component{
    render(){
        return(
            <View style={{
                flex:1,
            }}>
                <TouchableOpacity  onPress={this.props.Button} style={{
                        height:h('8%'),
                        width:w('70%'),
                        backgroundColor:'#2563EA',
                        borderRadius:11,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <Text style={{
                            color:'#FFFFFF',
                            fontWeight:'600',
                            fontSize: 16,
                            fontFamily: 'Poppins',
                        }}> {this.props.title} </Text>
                    </TouchableOpacity>
            </View>
        )
    }
}