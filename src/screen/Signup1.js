import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Btn } from "../component/Btn";

export class Signup1 extends React.Component{
    render(){
        return(
            <View style={styles.parentview}>
                <HeaderText titles={'StatBanking'} />
                <ContentText title={'Tell us about yourself'} />
                <View
                style={styles.textstylingview}>
                <Text style={styles.Textstylefont}>  I am a ..........</Text>
                </View>
                <View style={styles.TextInputView}>            
                <TextInput placeholderTextColor="#000000"  numberOfLines={10} placeholder={'Person'}  style={styles.TextInput1}/>
                <TextInput placeholderTextColor="#000000"  numberOfLines={10} placeholder={'Business'} style={styles.TextInput2}/>
                </View>
                <View style={styles.ButtonView}>
                <Btn Button={() => this.props.navigation.navigate('Signup2')} title={'Next'} />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentview:{
        flex:1,
    },
    textstylingview:{
        paddingLeft: h('5%'),
    },
    Textstylefont:{
        fontFamily: 'Poppins',
        color:"#000000",
    },
    TextInputView:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:h('3%'),
    },
    TextInput1:{
        height:h('27%'),
        width: w('80%'),
        borderWidth: h('0.08%'),
        borderRadius: h('2%'),
        marginBottom: h('2%'), 
    },
    TextInput2:{
        height:h('27%'),
        width: w('80%'),
        borderWidth: h('0.08%'),
        borderRadius: h('2%'), 
    },
    ButtonView:{
        marginTop:h('5%'),
        alignItems:'center',
        justifyContent:'center',
    }
})