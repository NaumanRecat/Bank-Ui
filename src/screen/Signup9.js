import React from 'react';
import { View , Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Input } from "../component/Input";
import { Btn } from "../component/Btn";

export class Signup9 extends React.Component {
    state = {
       
        gender: '',
        gender1: '',
     
       
        data: [
          {
            value: 'США',
          },
          {
            value: 'Казахстан',
          },
          {
            value: 'Украина',
          },
          {
            value: 'Киргизия',
          },
        ],
      };
    
   

    render() {
        return (
            <>
                <View style={{
                    flex:1,
                }}>  
                <HeaderText titles={'Tell us about your sport'} />
                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:h('3%'),
                }}>
                    <View style={{
                        marginTop:h('5%'),
                    }}>
                <Text> Label </Text>
                <View style={{
                    width: w('75%'),
                }}>
                <DropDownPicker
                  value={this.state.gender}
                  data={this.state.data}
                  onChangeText={(value) => this.setState({gender: value})}
                />
                </View>
                </View>  

                <View style={{
                    marginTop:h('5%'),
                }}>
                <Text> Label </Text>
                <View style={{
                    width: w('75%'),
                }}>
                <DropDownPicker
                  value={this.state.gender}
                  data={this.state.data}
                  onChangeText={(value) => this.setState({gender: value})}
                />
                </View>
                </View>       

                <View style={{
                    marginTop:h('5%'),
                }}>
                <Text> Label </Text>
                <View style={{
                    width: w('75%'),
                }}>
                <DropDownPicker
                  value={this.state.gender}
                  data={this.state.data}
                  onChangeText={(value) => this.setState({gender: value})}
                />
                </View>
                </View>  
                </View>  

                <View style={{
                    marginTop:h('10%'),
                    alignItems:'center',
                    justifyContent:'center',
                }} >
                    <Btn title={'Continue'} />
                    </View>   

                    <View style={{
                        marginTop:h('10%'),
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                    <Btn style={{
                    }} title={'Skip for now'} />
                        </View>     
               
                </View>
            </>
        );
    }
}