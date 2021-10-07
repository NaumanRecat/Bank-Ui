import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Input } from "../component/Input";
import { Btn } from "../component/Btn";

export class Signup7 extends React.Component{
    render(){
        return(
            <View style={{
                flex:1,
            }}>
            <HeaderText titles={'StatBanking'} />
            <ContentText title={'What is your Social Security Number'}  />
            <View style={{
                alignItems:'center',
                justifyContent:'center',
            }}>
            <Text style={{ marginTop: h('2%')}}>Required to be aproved by the____</Text>
            </View>
            
            <View style={{
                marginTop: h('8%')
            }}>
            <Input placeholder={'xx_xxx_xxx'} />
            </View>

            <View style={{
                alignItems:'center',
                justifyContent:'center',
                marginTop: h('32%')
            }}>
                <Btn Button={() => this.props.navigation.navigate('Signup8')}  title={'Next'} />
            </View>

            </View>
        )
    }
}