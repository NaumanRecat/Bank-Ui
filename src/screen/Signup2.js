import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Input } from "../component/Input";

export class Signup2 extends React.Component{
    render(){
        return(
            <View style={{
                flex:1,
            }}>
                <HeaderText 
                titles={'StatBanking'}
                />
                <ContentText
                title={'What is your legal name?'}
                />
                <View style={{
                    marginTop:h('12%'),
                }}>
                     <Input placeholder={'First name'} />
                <Input placeholder={'Last name'} />
                </View>

                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:'40%'
                }}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Signup3')}} style={{
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
                        }}> Log In </Text>
                    </TouchableOpacity>
                </View>
               
            </View>
        )
    }
}