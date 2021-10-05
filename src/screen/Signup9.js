import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';

import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import DatePicker from 'react-native-datepicker';
import CheckBox from 'react-native-check-box';

import {HeaderText} from '../component/HeaderText';
import {ContentText} from '../component/ContentText';
import { Input } from "../component/Input";
import { Btn } from "../component/Btn";

export class Signup9  extends React.Component{
    render(){
        return(
            <View>
                <Text> Nomi </Text>
            </View>
        )
    }
}