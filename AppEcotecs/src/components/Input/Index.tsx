import React from 'react';
import {TextInput, TextInputProps, Text, StyleSheet} from 'react-native';

interface InputProps extends TextInputProps{
    title: string
}

export default function Input({title,...rest}:InputProps){
    return (
        <>
            <Text style={styles.tituloInput} >{title}</Text>
            <TextInput style={styles.input} value={()=>{}} {...rest}/>
        </>
    )
}
const styles = StyleSheet.create({
    tituloInput:{
        fontSize:18,
        color:'white',
    },
    input:{
        backgroundColor:'white',
        width: '80%',
        height:40,
        marginBottom:10,
        padding:10
    }
})