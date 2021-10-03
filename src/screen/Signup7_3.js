import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Input } from "../component/Input";
import { Btn } from "../component/Btn";

export class Signup7_3 extends React.Component{
    render(){
        return(
            <View style={{
                flex:1,
            }}>
                <HeaderText titles={'Congrats! You Opened an Account'} />
                <ContentText title={'Create a Username and Password'} />
                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:h('5%'),
                    // backgroundColor:'#ada',
                    height:h('40%'),
                }}>
                <Input placeholder={'Username'}  />
                <Input placeholder={'Password'} />
                <Input placeholder={'Confirm Password'} />
                </View>

                <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    // backgroundColor:'green',
                }}>
                <View style={{
                    width:h('40%'),
                    alignItems:'center',
                    justifyContent:'center',
                    // backgroundColor:'pink',

                }}>
                <Text numberOfLines={3} style={{
                    fontWeight:'600',
                    fontSize: 13,
                }} >Password must contain 8 characters, 1 uppercase letter, 1 lower case letter, and 1 special character</Text>
                </View>
                </View>

                <View style={{
                    alignItems:'center',
                    marginTop: h('10%'),
                }}>
                <Btn title={'Confirm'} />
                </View>

            </View>
        )
    }
}