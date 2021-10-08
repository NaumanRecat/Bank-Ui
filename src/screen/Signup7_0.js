import React from 'react';
import {View, StyleSheet} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import DatePicker from 'react-native-datepicker';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Btn } from "../component/Btn";

export class Signup7_0 extends React.Component{

    state={
        date:'',
    }

    render(){   
        return(
          <View style={styles.parentview} >
            <HeaderText titles={'StatBanking'} />
            <ContentText title={'What is your Date of Birth?'}  />
          <View style={styles.datapickerview}>
            <DatePicker style={styles.datapicker}
            date={this.state.date} 
            mode="date" 
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
            }}/></View>
          <View style={styles.Buttonview}>
            <Btn Button={() => this.props.navigation.navigate('Signup7')} title={'Next'} />
          </View></View>
        )
    }
}

const styles = StyleSheet.create({
    parentview:{
      flex:1,
      padding: 10,
    },
    datapickerview:{
      marginTop:h('7%'),
      alignItems:'center',
      justifyContent:'center',
    },
    datapicker:{
      width: w('70%'),
      marginTop: 20,
    },
    Buttonview:{
      marginTop:h('49%'),
      alignItems:'center',
    }
})