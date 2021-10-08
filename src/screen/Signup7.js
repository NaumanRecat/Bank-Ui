import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Input } from "../component/Input";
import { Btn } from "../component/Btn";

export class Signup7 extends React.Component{
    render(){
        return(
        <View style={styles.parentview}>
            <HeaderText titles={'StatBanking'} />
            <ContentText title={'What is your Social Security Number'}  />
        <View style={styles.textstyle}>
            <Text style={styles.text}>Required to be aproved by the _ _ _ _</Text>
        </View>   
        <View style={styles.textinputstyle}>
            <Input placeholder={'xx_xxx_xxx'} />
        </View>
        <View style={styles.buttonview}>
            <Btn Button={() => this.props.navigation.navigate('Signup8')}  title={'Next'} />
        </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    parentview:{
        flex:1,
    },
    textstyle:{
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        marginTop: h('2%'), 
        fontFamily: 'Poppins', 
        fontWeight:'600'
    },
    textinputstyle:{
        marginTop: h('8%')
    },
    buttonview:{
        alignItems:'center',
        justifyContent:'center',
        marginTop: h('32%')
    }
})