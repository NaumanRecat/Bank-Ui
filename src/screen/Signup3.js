import React from "react";
import {View, StyleSheet} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Input } from "../component/Input";
import { Btn } from "../component/Btn";

export class Signup3 extends React.Component{
    render(){
        return(
            <View style={styles.parentView}>
            <HeaderText titles={'StatBanking'}/>
            <ContentText title={'How can we Contact you?'}/>
            <View style={styles.parentmargin}>
            <Input placeholder={'+ _ ( _  _  _ ) - _   _  _ - _  _  _  _'} />
            <Input placeholder={'Email'} /></View>
            <View style={styles.ButtonView}>
            <Btn Button={() => this.props.navigation.navigate('Signup4')} title={'Next'} />
            </View></View>
        )
    }
}

const styles = StyleSheet.create({
    parentView:{
        flex:1,
    },
    parentmargin:{
        marginTop:h('12%'),
    },
    ButtonView:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:'49%'
    }
})