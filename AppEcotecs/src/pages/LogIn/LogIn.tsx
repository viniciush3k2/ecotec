import React from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableOpacity,
    ScrollView,
    Platform
} from 'react-native';
import LogoI from '../../images/logoI.png';
import Input from '../../components/Input/Index';

export default function LogIn(){
    return ( 
        <SafeAreaView style={styles.container} >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >

                <ScrollView
                    contentContainerStyle={{ flex: 1 }}
                    keyboardShouldPersistTaps="handled"     
                >
                    <View style={styles.container}>    
                        <Image source={LogoI} style={styles.image} resizeMode="contain" />

                        <View style={styles.card}>

                            <Text style={styles.titulo}>Login</Text>
                            <Input icon="mail" title='E-mail' keyboardType="email-address" />
                            <Input icon="lock" title='Senha'  secureTextEntry={true} />

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>
                                    Entrar
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.link}>
                            <Text style={styles.forgotPasswordText}>Cadastre-se</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.link}>
                            <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
                        </TouchableOpacity>
                        {/* <Text style={styles.link}>Esqueceu sua senha?</Text> */}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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
        // backgroundColor:'#206A5D',
        height: Dimensions.get('window').width * 0.7,
        width: 321,
        borderRadius:13
    },
    titulo:{
        fontSize:25,
        color:'black',
        marginBottom:25
    },
    button:{
        width: '90%',
        height: 60,
        paddingHorizontal:16,
        backgroundColor: '#03ff5f',
        borderRadius: 10,
        marginTop: 8,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:{
        color: '#312e38',
        fontSize:18
    },
    link:{
        marginTop: 24,
        fontSize:20
    },
    forgotPasswordText:{
        color: '#000',
        fontSize: 16,
        // fontFamily: 'RobotoSlab-Regular';
    }
})
