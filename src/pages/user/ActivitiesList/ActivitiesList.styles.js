import { StyleSheet } from "react-native/types";

export default StyleSheet.create({
    container:{
        flex:1,
        marginBottom:16
    },
    background:{
        position:'absolute',
        width:400, 
        height:800, 
        right:0, 
        top:0, 
        left:0, 
        bottom:0
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    cityName:{
        fontSize:25,
        marginLeft:25,
        marginTop:20,
        fontFamily:'Lobster-Regular',
        color:'#FFBF00'
    },
});