import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Input } from "../component/Input";
import { Btn } from "../component/Btn";

export class Signup7_3 extends React.Component{
    render(){
        return(
            <View style={styles.parent}>
                <HeaderText titles={'Congrats! You Opened an Account'} />
                <ContentText title={'Create a Username and Password'} />
            <View style={styles.inputcontainer}>
                <Input placeholder={'Username'}  />
                <Input placeholder={'Password'} />
                <Input placeholder={'Confirm Password'} />
            </View>

            <View style={styles.textcontainer}>
            <View style={styles.textstyling}>
                <Text numberOfLines={3} style={styles.textstyle} >Password must contain 8 characters, 1 uppercase letter, 1 lower case letter, and 1 special character</Text>
            </View>
            </View>

            <View style={styles.Button}>
                <Btn Button={() => this.props.navigation.navigate('Signup7_5')}  title={'Confirm'} />
            </View></View>
        )
    }
}
const styles = StyleSheet.create({
    parent:{
        flex:1,
    },
    inputcontainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:h('5%'),
        height:h('40%'),
    },
    textcontainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    textstyling:{
        width:h('40%'),
        alignItems:'center',
        justifyContent:'center',
    },
    textstyle:{
        fontWeight:'600',
        fontSize: 13,
        fontFamily: 'Poppins',
    },
    Button:{
        alignItems:'center',
        marginTop: h('15%'),
    }
})