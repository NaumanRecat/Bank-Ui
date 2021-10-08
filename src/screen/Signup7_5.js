import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import { Btn } from "../component/Btn";

export class Signup7_5 extends React.Component{
    
    render(){
        return(
            <View>
                <HeaderText titles={'Choose a Plan'} />
            <View style={styles.inputtextcontainer}>
                <TextInput placeholder={'Varcity Plan'} style={styles.input1}/>
            <View style={styles.seprator} />
                <TextInput placeholder={'Varcity Plan'} style={styles.input1}/>
            <View style={styles.seprator} />
                <TextInput placeholder={'Varcity Plan'} style={styles.input1}/>
            <View style={styles.seprator} />
            <View>
                <TextInput placeholder={'Promo Code (Optional)'} style={styles.textinput4}/>
                <TextInput placeholder={'Referral Code (Optional)'} style={styles.input5}/>       
            </View>     
            </View>
            <View style={styles.Button}>
                <Btn Button={() => this.props.navigation.navigate('Signup9')}  title={'Next'}  />
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputtextcontainer:{
        alignItems:'center',
        justifyContent:'center',
        marginTop: h('3%')
    },
    input1:{
        height:h('17%'),
        width: w('85%'),
        borderWidth: h('0.08%'),
        borderRadius: h('2%'), 
    },
    seprator:{
        height: h('2%'),
    },
    textinput4:{
        height:h('8%'),
        width:w('80%'),
        borderWidth: h('0.08%'),
        borderRadius: h('1.3%'),  
        marginBottom: h('1%'),
    },
    input5:{
        height:h('8%'),
        width:w('80%'),
        borderWidth: h('0.08%'),
        borderRadius: h('1.3%'), 
    },
    Button:{
        marginTop: h('2%'),
        alignItems:'center',
    }
})