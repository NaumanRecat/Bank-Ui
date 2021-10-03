import React from "react";
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';

export class Signup5 extends React.Component{
    render(){
        return(
            <View style={{
                flex:1,
                // backgroundColor:'pink',
            }}>
                <HeaderText
                titles='StatBanking'
                />
                
                <ContentText
                title="Enter the verification code sent to 555-555-5555"
                />
                <View style={{
                    height:h('20%'),
                    width:w('100%'),
                    // backgroundColor:'yellow',
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop: h('8%'),
                }}>
                    <TextInput
                    style={{
                        height: h('6.5%'),
                        width: w('80%'),
                        borderWidth:0.5,
                        borderRadius:5,
                        color:'#C3D1F6',
                    }}
                    placeholder={'Verification Code'}
                    />
                </View>
                <View style={{
                    height:h('46%'),
                    width:w('100%'),
                    // backgroundColor:'pink',
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop: h('10%'),
                }}>
                <TouchableOpacity style={{
                        height:h('8%'),
                        width:w('70%'),
                        backgroundColor:'#2563EA',
                        borderRadius:11,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <Text style={{
                            color:'#FFFFFF',
                            fontWeight:'bold',
                            fontSize: 16,
                        }}> Log In </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}