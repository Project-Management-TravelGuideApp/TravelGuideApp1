import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1
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
    body_container:{
        flexDirection:'column'
    },
    image_container:{
        flexDirection:'row'
    },
    img_map:{
        borderRadius:500,
        borderWidth:3,
        borderColor:'#cc9900',
        width:108,
        height:108,
        alignSelf:'flex-end',
        marginBottom:-50,
        
    },
    image:{
        width:Dimensions.get('window').width/1.1,
        height:Dimensions.get('window').height/2,
        borderRadius:500,
        borderWidth:3,
        borderColor:'#cc9900',
        marginLeft:17,
    },
});