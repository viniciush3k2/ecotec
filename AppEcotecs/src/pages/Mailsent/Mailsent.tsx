import React from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import emailenviado from '../../images/emailenviado.png';

export default function Mailsent(){
    return(
        <View style={style.Container}>
            <Image source={emailenviado} />
            <Text style={style.Title}>
                E-mail enviado com sucesso!
            </Text>
            <Text style={style.Description}>
                UM E-MAIL FOI ENVIADO PARA: ni*******nicholas.com
            </Text>
            <TouchableOpacity style={style.ButtonLogin}>
                <Text style={{color:'white'}}>
                    Voltar para a tela de login
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const style = StyleSheet.create({
    Container:{
        alignItems:'center',
        padding:10
    },
    Title:{
        fontSize:23,
        fontWeight:'bold',
        marginBottom:15
    },
    Description:{
        fontSize:14,
        textAlign:'center',
        marginBottom:15
    },
    ButtonLogin:{
        backgroundColor:'#FFFFFF',
        height:41,
        width:101,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'5%'
    },
}) 
