import React from "react";
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';

export class Signup5 extends React.Component{
    render(){
        return(
            <View style={styles.parentview}>
                <HeaderText titles='StatBanking' />
                <ContentText title="Enter the verification code sent to 555-555-5555" />
            <View style={styles.Textinputview}>
                <TextInput style={styles.Textinput} placeholder={'Verification Code'} placeholderTextColor="#000000"  />
            </View>
            <View style={styles.BelowButtonview}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Signup6')}} style={styles.Button}>
                <Text style={styles.ButtonText}> Log In </Text></TouchableOpacity>
            </View></View>
        )
    }
}

const styles = StyleSheet.create({
    parentview:{
        flex:1,
    },
    Textinputview:{
        height:h('20%'),
        width:w('100%'),
        alignItems:'center',
        justifyContent:'center',
        marginTop: h('8%'),
    },
    Textinput:{
        height: h('6.5%'),
        width: w('80%'),
        borderWidth:0.5,
        borderRadius:5,
        color:'#C3D1F6',
    },
    BelowButtonview:{
        height:h('46%'),
        width:w('100%'),
        alignItems:'center',
        justifyContent:'center',
        marginTop: h('10%'),
    },
    Button:{
        height:h('8%'),
        width:w('70%'),
        backgroundColor:'#2563EA',
        borderRadius:11,
        alignItems:'center',
        justifyContent:'center',
        marginTop: h('13%'),
    },
    ButtonText:{
        color:'#FFFFFF',
        fontWeight:'600',
        fontSize: 16,
        fontFamily: 'Poppins',
    }
})