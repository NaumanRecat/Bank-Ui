import React from "react";
import {View, StyleSheet} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Input } from "../component/Input";
import { Btn } from "../component/Btn";

export class Signup2 extends React.Component{
    render(){
        return(
            <View style={styles.parentview}>
                <HeaderText  titles={'StatBanking'}/>
                <ContentText title={'What is your legal name?'}/>
                <View style={styles.Inputview}>
                <Input placeholder={'First name'} />
                <Input placeholder={'Last name'} /></View>

                <View style={styles.ButtonView}>
                    <Btn Button={() => this.props.navigation.navigate('Signup3')} title={'Next'} />
                </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentview:{
        flex:1,
    },
    Inputview:{
        marginTop:h('12%'),
    },
    ButtonView:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:'49%',
    }
})