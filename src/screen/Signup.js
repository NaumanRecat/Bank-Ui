import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

export class Signup extends React.Component{
    render(){
        return(
            <View style={{
                flex:1,
                // backgroundColor:'#ada',
            }}>
                <View style={{
                    height:h('20%'),
                    width:w('100%'),
                    // backgroundColor:'pink',
                    alignItems:'center',
                    marginTop: h('10%'),
                }}>
                    <Image style={{
                        height:h('35%'),
                        resizeMode: 'stretch',
                    }} source={require('../assests/Sign.png')}  />

                    <Text style={{
                        fontSize: 20,
                        fontWeight:'600',
                        marginTop: h('5%'),
                        color:'black',
                        fontFamily: 'Poppins',
                    }}> Welcome to StatBanking</Text>
                </View>
                <View style={{
                    height:h('36%'),
                    width:w('100%'),
                    // backgroundColor:'brown',
                    marginTop: h('33%'),
                    alignItems:'center',
                    justifyContent:'center',
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
                            color:'white',
                            fontWeight:'600',
                            fontSize: 24,
                            fontFamily: 'Poppins',
                        }}> Sign up</Text>
                    </TouchableOpacity>

                    <View style={{
                        height:h('1%'),
                    }}  />

                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Signup1')}} style={{
                        height:h('8%'),
                        width:w('70%'),
                        backgroundColor:'#7C857E',
                        borderRadius:11,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <Text style={{
                            color:'#000000',
                            fontWeight:'600',
                            fontSize: 24,
                            fontFamily: 'Poppins',
                        }}> Log In </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}