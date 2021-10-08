import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

import {HeaderText} from '../component/HeaderText'

export class Welcome extends React.Component{
    render(){
        return(
            <View style={styles.parent}>
                <HeaderText titles={'WELCOME TO STAT BANKING'}/>
            <View style={styles.maincontainer}>
                <Text> Empty Screen </Text>
            </View></View>
        )
    }
}
const styles = StyleSheet.create({
    parent:{
        flex:1,
    },
    maincontainer:{
        height:h('85%'),
        width: w('100%'),
        alignItems:'center',
        justifyContent:'center',
    }
})