import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import DatePicker from 'react-native-datepicker';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Input } from "../component/Input";
import { Btn } from "../component/Btn";

export class Signup7_5 extends React.Component{
    
    render(){
        return(
            <View>
                <HeaderText titles={'Choose a Plan'} />
                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop: h('3%')
                }}>
                <TextInput placeholder={'Varcity Plan'} style={{
                     height:h('17%'),
                     width: w('85%'),
                     borderWidth: h('0.08%'),
                     borderRadius: h('2%'),  
                      }}/>

                      <View style={{
                          height: h('2%'),
                      }} />

                    <TextInput placeholder={'Varcity Plan'} style={{
                     height:h('17%'),
                     width: w('85%'),
                     borderWidth: h('0.08%'),
                     borderRadius: h('2%'),  
                      }}/>

                    <View style={{
                          height: h('2%'),
                      }} />

                    <TextInput placeholder={'Varcity Plan'} style={{
                     height:h('16%'),
                     width: w('85%'),
                     borderWidth: h('0.08%'),
                     borderRadius: h('2%'),  
                      }}/>

                    <View style={{
                          height: h('2%'),
                      }} />

                      <View>
                          <TextInput placeholder={'Promo Code (Optional)'} style={{
                              height:h('8%'),
                              width:w('80%'),
                              borderWidth: h('0.08%'),
                              borderRadius: h('1.3%'),  
                              marginBottom: h('1%'),
                          }}/>
                          <TextInput placeholder={'Referral Code (Optional)'} style={{
                              height:h('8%'),
                              width:w('80%'),
                              borderWidth: h('0.08%'),
                              borderRadius: h('1.3%'),  
                          }}/>
                          
                      </View>     
                </View>
                <View style={{
                    marginTop: h('2%'),
                    alignItems:'center',
                }}>
                    <Btn title={'Next'}  />
                </View>
            </View>
        )
    }
}