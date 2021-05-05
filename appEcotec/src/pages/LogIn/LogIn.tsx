import React from 'react';
import {View,Text, Image, StyleSheet, Dimensions, SafeAreaView,TextInput, TouchableOpacity} from 'react-native';
import LogoI from '../../images/logoI.png';
import Input from '../../components/Input/Index';

export default function LogIn(){
    return (
        <SafeAreaView style={styles.container} >
            <Image source={LogoI} style={styles.image} resizeMode="contain" />

            <View style={styles.card}>

                <Text style={styles.titulo}>Login</Text>
                
                {/* <Text  style={styles.tituloInput} >Usuário</Text>
                <TextInput style={styles.input} value={()=>{}} />
                <Text style={styles.tituloInput} >Senha</Text>
                <TextInput secureTextEntry={true} style={styles.input} value={()=>{}} /> */}
                <Input title='E-mail' />
                <Input title='Senha'  secureTextEntry={true} />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.link}>Cadastre-se</Text>
            <Text style={styles.link}>Esqueceu sua senha?</Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:10,
        marginBottom:0
    },
    image: {
        height: Dimensions.get('window').width * 0.6,
        margin:0
    },
    card:{
        alignItems:'center',
        marginTop:0,
        backgroundColor:'#206A5D',
        height: Dimensions.get('window').width * 0.7,
        width: 321,
        borderRadius:13
    },
    titulo:{
        fontSize:25,
        color:'white',
        marginBottom:25
    },
    tituloInput:{
        fontSize:18,
        color:'white',
    },
    input:{
        backgroundColor:'white',
        width: '80%',
        height:40,
        marginBottom:10
    },
    button:{
        backgroundColor: '#C4C4C4',
        width: '50%',
        height:37,
        alignItems:'center',
        borderRadius:5
    },
    textButton:{
        fontSize:20
    },
    link:{
        fontSize:20
    }
})
