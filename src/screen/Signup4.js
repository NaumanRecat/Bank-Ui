import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';

export class Signup4 extends React.Component{
    render(){
        return(
            <View style={{
                flex:1,
                // backgroundColor:'pink',
            }}>
                <HeaderText
                titles={'StatBanking'}
                />

                <ContentText
                title={'Choose your verification Method'}
                />

            <View style={{
                    height:h('36%'),
                    width:w('100%'),
                    // backgroundColor:'brown',
                    marginTop: h('15%'),
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                <TouchableOpacity style={{
                        height:h('8%'),
                        width:w('70%'),
                        backgroundColor:'#7C857E',
                        borderRadius:11,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <Text style={{
                            color:'#FFFFFF',
                            fontWeight:'bold',
                            fontSize: 16,
                        }}> Sign up</Text>
                    </TouchableOpacity>

                    <View style={{
                        height:h('1%'),
                    }}  />

                    <TouchableOpacity style={{
                        height:h('8%'),
                        width:w('70%'),
                        backgroundColor:'#7C857E',
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