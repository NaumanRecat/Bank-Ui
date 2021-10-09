import React from 'react';
import { View , Text, TouchableOpacity, StyleSheet} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';

import {HeaderText} from '../component/HeaderText';
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([""]);

export class Signup10 extends React.Component{
    state = {
        gender1: '',
        gender2: '',
        gender3: '',
        loading: false,
        data1:[{ value:'Label 1'}, { value:'Label 2'}, { value:'Label 3'},],
        data2:[{ value:'Label 1'}, { value:'Label 2'}, { value:'Label 3'},],
        data3:[{ value:'Label 1'}, { value:'Label 2'}, { value:'Label 3'},],
     };
    render(){
        return(
            <View style={styles.parent}>
                <HeaderText titles={'Tell us about your sport'} />
            <View style={styles.Label1} ><Text>Label 1</Text></View>
            <View style={styles.Dropdownview}>    
                <Dropdown
                    name='rowing' 
                    value={this.state.gender1}
                    data={this.state.data1}
                    onChangeText={(value) => this.setState({gender1: value})}
                    containerStyle={{
                    marginTop: -h('1%'), }} />
            </View>
            <View style={styles.Label2}><Text>Label 1</Text></View>
            <View style={styles.Dropdownview}>   
                <Dropdown
                    icon='arrow-down'
                    value={this.state.gender2}
                    data={this.state.data2}
                    onChangeText={(value) => this.setState({gender2: value})}
                    containerStyle={{
                    marginTop: -h('1%'), }} />
            </View>
            <View style={styles.Label3}><Text>Label 1</Text></View>
            <View style={styles.Dropdownview}>      
                <Dropdown
                    icon='arrow-down'
                    value={this.state.gender3}
                    data={this.state.data3}
                    onChangeText={(value) => this.setState({gender3: value})}
                    containerStyle={{
                    marginTop: -h('1%'), }} />
            </View>
            <View style={styles.Buttonview}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Welcome')}} style={styles.Button1}>
                <Text style={styles.Buttontxt}> Continue</Text></TouchableOpacity>
            <View style={styles.seprator}/>
                <TouchableOpacity style={styles.Button2}>
                <Text style={styles.Buttontxt2}> Skip for Now</Text></TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  parent:{
    flex:1,
  },
  Label1:{
    paddingLeft: h('5%'),
    marginTop: h('6%')
  },
  Dropdownview:{
    height: h('9%'),
    width: '85%',
    borderRadius: h('1%'),
    marginBottom: h('2%'),
    marginLeft:h('4%'),
    borderWidth:h('0.15%'),
  },
  Label2:{
    paddingLeft: h('5%'),
    marginTop: h('3%')
  },
  Label3:{
    paddingLeft: h('5%'),
    marginTop: h('3%')
  },
  Buttonview:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:h('11%'),
  },
  Button1:{
    height:h('8%'),
    width:w('70%'),
    backgroundColor:'#2563EA',
    borderRadius:11,
    alignItems:'center',
    justifyContent:'center',
  },
  Buttontxt:{
    color:'#FFFFFF',
    fontWeight:'600',
    fontSize: 16,
    fontFamily: 'Poppins',
  },
  seprator:{
    height:h('2%'),
  },
  Button2:{
    height:h('8%'),
    width:w('70%'),
    backgroundColor:'#7C857E',
    borderRadius:11,
    alignItems:'center',
    justifyContent:'center',
  },
  Buttontxt2:{
    color:'#FFFFFF',
    fontWeight:'600',
    fontSize: 16,
    fontFamily: 'Poppins',
  }
})