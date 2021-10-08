import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import {Input} from '../component/Input';

export class Signup6 extends React.Component{
    render(){
        return(
            <View style={styles.parentview}>
                <HeaderText titles={'StatBanking'}  />
                <ContentText title={'What is your permanent address?'} />     
            <View style={styles.inputview}>
                <Input placeholder={'Street'} />
                <Input placeholder={'City'} />
                <Input placeholder={'Zip Code'} />
                <Input placeholder={'State'} />
            </View>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Signup7_0')}} style={styles.ButtonView}>
                <Text style={styles.Buttontext}> Next </Text>
            </TouchableOpacity></View>
        )
    }
}

const styles = StyleSheet.create({
    parentview:{
        flex:1,
        alignItems:'center',
    },
    inputview:{
        marginTop:h('6%'),
    },
    ButtonView:{
        height:h('8%'),
        width:w('70%'),
        backgroundColor:'#2563EA',
        borderRadius:11,
        alignItems:'center',
        justifyContent:'center',
        marginTop:h('10%'),
    },
    Buttontext:{
        color:'#FFFFFF',
        fontWeight:'600',
        fontSize: 16,
        fontFamily: 'Poppins',
    }
})