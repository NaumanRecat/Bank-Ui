import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import {Input} from '../component/Input';

export class Signup6 extends React.Component{
    render(){
        return(
            <View style={{
                flex:1,
                alignItems:'center',
            }}>
                <HeaderText titles={'StatBanking'}  />
                <ContentText title={'What is your permanent address?'}   />
                
            <View style={{
                marginTop:h('6%'),
                
            }}>
            <Input placeholder={'Street'} />
            <Input placeholder={'City'} />
            <Input placeholder={'Zip Code'} />
            <Input placeholder={'State'} />
            </View>

            <TouchableOpacity style={{
                        height:h('8%'),
                        width:w('70%'),
                        backgroundColor:'#2563EA',
                        borderRadius:11,
                        alignItems:'center',
                        justifyContent:'center',
                        marginTop:h('5%'),
                    }}>
                        <Text style={{
                            color:'#FFFFFF',
                            fontWeight:'bold',
                            fontSize: 16,
                        }}> Next </Text>
                    </TouchableOpacity>

            </View>
        )
    }
}