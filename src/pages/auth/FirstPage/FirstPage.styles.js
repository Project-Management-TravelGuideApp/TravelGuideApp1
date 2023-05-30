import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    image:{
        width:Dimensions.get('screen').width/1,
        height:Dimensions.get('screen').height/3.7,
        marginTop:10
    },
    header:{
        fontFamily:'RopaSans-Regular',
        fontSize:30,
        alignSelf:'center',
        marginBottom:25,
        marginTop:-30,
    },
    body_container:{
        justifyContent:'center',
        marginLeft:25,
        marginRight:25,
    },
    google:{
        borderWidth:2,
        borderBottomLeftRadius:50,
        borderTopRightRadius:50,
        padding:18,
        backgroundColor:'white',
        marginBottom:5,
        borderColor:'#ffd633',
        marginTop:20,
        flexDirection:'row'
    },
    image_icon:{
        height:45,
        width:45
    },
    facebook:{
        borderWidth:2,
        borderBottomRightRadius:50,
        borderTopLeftRadius:50,
        padding:18,
        backgroundColor:'white',
        marginBottom:5,
        borderColor:'#ffd633',
        flexDirection:'row'
    },
    sign_in:{
        borderWidth:2,
        borderRadius:50,
        padding:10,
        backgroundColor:'#ffd633',
        borderColor:'#ffd633',
        marginTop:20,
        marginLeft:50,
        marginRight:50
    },
    footer_container:{
        marginTop:25
    },
    login:{

    },
    google_text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#737373',
        marginLeft:25,
        marginTop:5
    },
    facebook_text:{
        fontSize:20,
        fontWeight:'bold',
        color:'#737373',
        alignSelf:'center',
        marginLeft:25
    },
    sign_in_text:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
        alignSelf:'center'
    },
    question_text:{
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center',
        color:'#737373',
    },
    login_text:{
        fontSize:25,
        fontWeight:'bold',
        color:'#e6e600',
        alignSelf:'center',
    }
});