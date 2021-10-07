import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import DatePicker from 'react-native-datepicker';
import CheckBox from 'react-native-check-box';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Input } from "../component/Input";
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
            <View style={{
                flex:1,
                
            }}>
                <HeaderText titles={'Tell us about your sport'} />
                <ContentText title={'Term and Condition'} />

             <View style={{
                 alignItems:'center',
                 justifyContent:'center',
                 marginTop: h('1%'),
             }}>
             <View style={{
                    height: h('58%'),
                    width: w('85%'),
                    // backgroundColor:'green',
                    borderWidth: h('0.03%'),
                    borderRadius: h('1%'),
                }}>
                   <ScrollView>
                   <Text style={{
                       fontWeight:'500',
                       fontSize: 18,
                   }}>Lorem Ipsum is simply dumm y text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text> 
                   </ScrollView>
                </View> 
             </View>

                <View
            style={{
                height:h('5%'),
                width:'100%',
                marginLeft:h('4%'),
                justifyContent:'center',
                marginTop:h('3%'),
                

            }}
            >
            <CheckBox
                onClick={()=>{
                    this.check('I agree to the terms and conditions of ....')
                }}
                isChecked={this.state.isChecked}
                rightText={"I agree to the terms and conditions of ...."}
                // style={{fontFamily:'SFProDisplay-Light'}}
            />
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                marginRight: h('10%'),
                marginTop:h('3%'),
            }}>
            <Btn Button={() => this.props.navigation.navigate('Signup7_3')}  title={'Confirm'} />
            </View>
           
            </View>
            
                
            </View>
        )
    }
}