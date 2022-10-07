import { StyleSheet,Dimensions } from "react-native";

const {height}=Dimensions.get('window')


const styles =StyleSheet.create({
    headerMain:{
        height:height *0.064,
        backgroundColor:'#f7d102'
    },
    headerOne:{
        backgroundColor:'white',
        height:height *0.064,
        width:'80%',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'3%',
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
        


    },
    image:{
        width:30,
        height:30,
    },
    headerOneView:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8,
        paddingLeft:8,
        borderLeftColor:'#f3f2fd',
        borderLeftWidth:2
    },headerTwo:{
        width:'25%',
        height:height *0.064,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:10,
        
    }
})

export default styles