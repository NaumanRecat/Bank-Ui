import React from 'react';
import { View , Text, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Input } from "../component/Input";
import { Btn } from "../component/Btn";

import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([""]);

export class Signup10 extends React.Component{
    state = {
        email: '',
        gender: '',
        gender1: '',
        loading: false,
        data1:[
          {
            value:'Label 1'
          },
          {
            value:'Label 2'
          },
          {
            value:'Label 3'
          },    
        ],
      };
    render(){
        return(
            <View style={{
                flex:1,
            }}>
                <HeaderText titles={'Tell us about your sport'} />
            
               <View style={{
                paddingLeft: h('5%'),
                marginTop: h('6%')
               }} >
                   <Text>Label 1</Text>
                 </View>
               <View
                style={{
                  height: h('9%'),
                  width: '85%',
                  borderRadius: h('1%'),
                  marginBottom: h('2%'),
                  marginLeft:h('4%'),
                  borderWidth:h('0.15%'),
                //   marginTop:h('10%'),
                //   backgroundColor:'#ada',
                }}>
                   
                <Dropdown
                    icon='arrow-down'
                    value={this.state.gender1}
                    data={this.state.data1}
                    onChangeText={(value) => this.setState({gender1: value})}
                    containerStyle={{
                    marginTop: -h('1%'), }} />
              </View>

              <View style={{
                paddingLeft: h('5%'),
                marginTop: h('3%')
               }} >
                   <Text>Label 1</Text>
                 </View>
               <View
                style={{
                  height: h('9%'),
                  width: '85%',
                  borderRadius: h('1%'),
                  marginBottom: h('2%'),
                  marginLeft:h('4%'),
                  borderWidth:h('0.15%'),
                //   marginTop:h('10%'),
                //   backgroundColor:'#ada',
                }}>
                   
                <Dropdown
                    icon='arrow-down'
                    value={this.state.gender1}
                    data={this.state.data1}
                    onChangeText={(value) => this.setState({gender1: value})}
                    containerStyle={{
                    marginTop: -h('1%'), }} />
              </View>

              <View style={{
                paddingLeft: h('5%'),
                marginTop: h('3%')
               }} >
                   <Text>Label 1</Text>
                 </View>
               <View
                style={{
                  height: h('9%'),
                  width: '85%',
                  borderRadius: h('1%'),
                  marginBottom: h('2%'),
                  marginLeft:h('4%'),
                  borderWidth:h('0.15%'),
                //   marginTop:h('10%'),
                //   backgroundColor:'#ada',
                }}>
                   
                <Dropdown
                    // icon='arrow-down'
                    value={this.state.gender1}
                    data={this.state.data1}
                    onChangeText={(value) => this.setState({gender1: value})}
                    containerStyle={{
                    marginTop: -h('1%'), }} />
              </View>

              <View style={{
                  alignItems:'center',
                  justifyContent:'center',
                  marginTop:h('11%')
              }}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Welcome')}} style={{
                  height:h('8%'),
                  width:w('70%'),
                  backgroundColor:'#2563EA',
                  borderRadius:11,
                  alignItems:'center',
                  justifyContent:'center',
              }}>
                <Text style={{
                          color:'#FFFFFF',
                          fontWeight:'600',
                          fontSize: 16,
                          fontFamily: 'Poppins',
                }}> Continue</Text></TouchableOpacity>

                <View style={{
                    height:h('2%'),
                }}/>

<TouchableOpacity style={{
                  height:h('8%'),
                  width:w('70%'),
                  backgroundColor:'#7C857E',
                  borderRadius:11,
                  alignItems:'center',
                  justifyContent:'center',
              }}>
                <Text style={{
                          color:'#FFFFFF',
                          fontWeight:'600',
                          fontSize: 16,
                          fontFamily: 'Poppins',
                }}> Skip for Now</Text></TouchableOpacity>
              </View>
            </View>
        )
    }
}