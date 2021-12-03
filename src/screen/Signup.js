import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import {ContentText} from '../component/ContentText';
import PushNotification from "react-native-push-notification";

export class Signup extends React.Component{

    componentDidMount = () => {
      
        this.createChannels();
      };

createChannels =()=>{
       PushNotification.createChannel(
           {
               channelId:"test-channel",
               channelName:"Test-channel"
           }
       )
}

handleNotification=()=>{
    PushNotification.localNotification({
        channelId:"test-channel",
        title:"Kinza ",
        message: "hi gow adww biy",     
    });
    PushNotification.localNotificationSchedule({
        channelId: "test-channel",
        title:"Alram",
        message:"Hi how are you",
        date: new Date(Date.now() + 20*1000),
        allowWhileIdle:'true',
    });
}






    render(){
        return(
            <View style={styles.ParentView}>
                <View style={styles.ImageView}>
                    <Image style={styles.ImageStyle} source={require('../assests/Sign.png')}  />
                    <ContentText title={'Welcome to StatBanking'} />
                </View>
                <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.SignupView}>
                        <Text style={styles.SignupText}> SIGN UP</Text>
                    </TouchableOpacity>

                    <View style={styles.Seprator}  />

                    <TouchableOpacity onPress={()=>{
                   this.handleNotification()
               }}
                    style={styles.LoginView}>
                        <Text style={styles.LoginText}> LOG IN </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

  
}


const styles = StyleSheet.create({
        ParentView:{
            flex:1,
        },
        ImageView:{
            height:h('20%'),
            width:w('100%'),
            alignItems:'center',
            marginTop: h('10%'),
        },
        ImageStyle:{
            height:h('35%'),
            resizeMode: 'stretch',
        },
        ButtonContainer:{
            height:h('36%'),
            width:w('100%'),
            marginTop: h('33%'),
            alignItems:'center',
            justifyContent:'center',
        },
        SignupView:{
            height:h('8%'),
            width:w('70%'),
            backgroundColor:'#2563EA',
            borderRadius:11,
            alignItems:'center',
            justifyContent:'center',
        },
        SignupText:{
            color:'white',
            fontWeight:'600',
            fontSize: 24,
            fontFamily: 'Poppins',
        },
        Seprator:{
            height:h('3%'),
        },
        LoginView:{
            height:h('8%'),
            width:w('70%'),
            backgroundColor:'#7C857E',
            borderRadius:11,
            alignItems:'center',
            justifyContent:'center',
        },
        LoginText:{
            color:'#000000',
            fontWeight:'600',
            fontSize: 24,
            fontFamily: 'Poppins',
        }
})