import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';

export class Signup4 extends React.Component{
    render(){
        return(
            <View style={styles.parentview}>
                <HeaderText titles={'StatBanking'}/>
                <ContentText title={'Choose your verification Method'}/>
            <View style={styles.Buttonview}>   
                <TouchableOpacity style={styles.Button1View}>
                <Text style={styles.ButtonText}> Text me</Text></TouchableOpacity>
                <View style={styles.seprator}  />
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Signup5')} style={styles.Button2View}>
                <Text style={styles.ButtonText2}> Email me </Text>
                </TouchableOpacity></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentview:{
        flex:1,
    },
    Buttonview:{
        height:h('36%'),
        width:w('100%'),
        marginTop: h('10%'),
        alignItems:'center',
        justifyContent:'center',
    },
    Button1View:{
        height:h('8%'),
        width:w('70%'),
        backgroundColor:'#7C857E',
        borderRadius:11,
        alignItems:'center',
        justifyContent:'center',
    },
    ButtonText:{
        color:'#FFFFFF',
        fontWeight:'600',
        fontSize: 16,
        fontFamily: 'Poppins',
    },
    seprator:{
        height:h('1%'),
    },
    Button2View:{
        height:h('8%'),
        width:w('70%'),
        backgroundColor:'#7C857E',
        borderRadius:11,
        alignItems:'center',
        justifyContent:'center',
    },
    ButtonText2:{
        color:'#FFFFFF',
        fontWeight:'600',
        fontSize: 16,
        fontFamily: 'Poppins',
    }
})