import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Input } from "../component/Input";
import { Btn } from "../component/Btn";

export class Signup3 extends React.Component{
    render(){
        return(
            <View style={{
                flex:1,
            }}>
                <HeaderText 
                titles={'StatBanking'}
                />
                <ContentText
                title={'How can we Contact you?'}
                />
                <View style={{
                    marginTop:h('12%'),
                }}>
                <Input placeholder={'+_(_ _ _)-_ _ _-_ _ _ _'} />
                <Input placeholder={'Email'} />
                </View>

                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:'40%'
                }}>
                <Btn Button={() => this.props.navigation.navigate('Signup4')} title={'Next'} />
                </View>
               
            </View>
        )
    }
}