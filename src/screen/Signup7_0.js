import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import DatePicker from 'react-native-datepicker';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Input } from "../component/Input";
import { Btn } from "../component/Btn";

export class Signup7_0 extends React.Component{

    state={
        date:'',
    }
    render(){
        
        return(
            <View style={{
                flex:1,
                padding: 10,
                // backgroundColor:'green',
            }} >
                <HeaderText titles={'StatBanking'} />
                <ContentText title={'What is your Date of Birth?'}  />
                <View style={{
                    marginTop:h('7%'),
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                <DatePicker
          style={{
            width: w('70%'),
            marginTop: 20,
          }}
          date={this.state.date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="mm/dd/yyyy"
          format="MM-DD-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2050"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
              this.setState(date);
          }}
        />
                </View>
                <View style={{
                    marginTop:h('45%'),
                    alignItems:'center',
                }}>
                <Btn Button={() => this.props.navigation.navigate('Signup7')} title={'Next'} />
                </View>
            </View>
        )
    }
}