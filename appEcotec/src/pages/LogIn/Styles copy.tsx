import {StyleSheet,Dimensions} from 'react-native';

export const styles = {
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:20
    },
    image: {
        height: Dimensions.get('window').width * 0.6,
    }
}