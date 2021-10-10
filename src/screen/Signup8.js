import React from 'react';
import {View, Text, ScrollView,StyleSheet} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import CheckBox from 'react-native-check-box';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Btn } from "../component/Btn";

export class Signup8  extends React.Component{
    state = {  
        isChecked:false,
        isChecked1:false
      };

      check = (text) => {
          console.log(text)
          if (text === 'I agree to the terms and conditions of ....'){
            this.setState({
                isChecked:true,
                isChecked1:false,
            })
            } else {
                this.setState({
                    isChecked:false,
                    isChecked1:true
                })    
          }
      }
    render(){
        return(
            <View style={styles.parentview}>
                <HeaderText titles={'Tell us about your sport'} />
                <ContentText title={'Term and Condition'} />
            <View style={styles.stylecontainerview}>
            <View style={styles.stylecontainer}>
                <ScrollView>
                <Text style={styles.containertext}>Lorem Ipsum is simply dumm y text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text> 
                </ScrollView>
            </View></View>
            <View style={styles.checkboxstyle}>
                <CheckBox
                checkBoxColor={'Re'}
                onClick={()=>{this.check('I agree to the terms and conditions of ....')}}
                isChecked={this.state.isChecked}
                rightText={"I agree to the terms and conditions of ...."}/>
            <View style={styles.Button}>
            <Btn Button={() => this.props.navigation.navigate('Signup7_3')}  title={'Confirm'} />
            </View>
            </View>     
            </View>
        )
    }
}

const styles = StyleSheet.create({
  parentview:{
    flex:1,
  },
  stylecontainerview:{
    alignItems:'center',
    justifyContent:'center',
    marginTop: h('1%'),
  },
  stylecontainer:{
    height: h('58%'),
    width: w('85%'),
    borderWidth: h('0.03%'),
    borderRadius: h('1%'),
  },
  containertext:{
    fontWeight:'600',
    fontSize: 18,
    fontFamily: 'Poppins',
    color:'#000000'
  },
  checkboxstyle:{
    height:h('5%'),
    width:'100%',
    marginLeft:h('4%'),
    justifyContent:'center',
    marginTop:h('3%'),
  },
  Button:{
    alignItems:'center',
    justifyContent:'center',
    marginRight: h('10%'),
    marginTop:h('3%'),
  }
})