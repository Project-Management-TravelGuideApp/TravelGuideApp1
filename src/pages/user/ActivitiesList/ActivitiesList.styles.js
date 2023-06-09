import { StyleSheet } from "react-native";

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
    body_container:{
        marginTop:20,
        marginHorizontal:10,
        flexDirection:'row',
        backgroundColor:'rgba(255, 255, 255, 0.22)',
        borderRadius:10,
        padding:10
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
        borderColor:'#FFBF00',
        borderWidth:2,
    },
    name:{
        fontSize:20,
        marginLeft:10,
        fontFamily:'LilitaOne-Regular',
        color:'#FFBF00',
        alignSelf:'center'
    }
});