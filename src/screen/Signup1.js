import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import DatePicker from 'react-native-datepicker';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Input } from "../component/Input";
import { Btn } from "../component/Btn";

export class Signup1 extends React.Component{
    render(){
        return(
            <View style={{
                flex:1,
            }}>
                <HeaderText titles={'StatBanking'} />
                <ContentText title={'Tell us about yourself'} />
                <View
                style={{
                    paddingLeft: h('5%'),
                }}>
                    <Text style={{fontFamily: 'Poppins'}}>  I am a ..........</Text>
                </View>
                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:h('4%'),
                }}>
                
                <TextInput numberOfLines={10} placeholder={'Person'} style={{
                     height:h('27%'),
                     width: w('80%'),
                     borderWidth: h('0.08%'),
                     borderRadius: h('2%'),
                     marginBottom: h('2%'),  
                      }}/>

                <TextInput  numberOfLines={10} placeholder={'Business'} style={{
                     height:h('27%'),
                     width: w('80%'),
                     borderWidth: h('0.08%'),
                     borderRadius: h('2%'),  
                      }}/>
                </View>
                <View style={{
                    marginTop:h('5%'),
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                <Btn Button={() => this.props.navigation.navigate('Signup2')} title={'Next'} />
                </View>
                
            </View>
        )
    }
}