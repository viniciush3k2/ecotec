import React from 'react';
import {View,Text, Image, StyleSheet, Dimensions, SafeAreaView,TextInput, TouchableOpacity} from 'react-native';

import Input from '../../components/Input/Index';

export default function SignUp(){
    return (
        <SafeAreaView style={styles.container} >

            <View style={styles.card}>

                <Text style={styles.titulo}>Cadastre-se</Text>
                
                {/* <Text  style={styles.tituloInput} >Usuário</Text>
                <TextInput style={styles.input} value={()=>{}} />
                <Text style={styles.tituloInput} >Senha</Text>
                <TextInput secureTextEntry={true} style={styles.input} value={()=>{}} /> */}
                <Input title='Nome' />
                <Input title='Sobrenome' />
                <Input title='Telefone' />
                <Input title='E-mail' />
                <Input title='Senha'  secureTextEntry={true} />
                <Input title='Confirmar Senha' secureTextEntry={true} />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>
                        Voltar
                    </Text>
                </TouchableOpacity>
            </View>

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
        height: Dimensions.get('window').height * 1,
        width: 321,
        borderRadius:13
    },
    titulo:{
        fontSize:25,
        color:'white',
        marginBottom:25
    },
    button:{
        backgroundColor: '#C4C4C4',
        width: '80%',
        height:37,
        alignItems:'center',
        borderRadius:5,
        marginTop:15
    },
    textButton:{
        fontSize:20
    },
    link:{
        fontSize:20
    }
})
