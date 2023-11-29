import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderColor:"black",
        width:'40%',
        marginTop:'6%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        marginHorizontal:'5.2%',
        backgroundColor:'#804049',
        shadowColor: '#000', // iOS için gölge
        shadowOffset: { width: 2, height: 10 }, // iOS için gölge
        shadowOpacity: 0.5, // iOS için gölge
        shadowRadius: 4, // iOS için gölge
        
    },
    buttonText: {
        fontWeight: 'bold',
        textAlign:"center",
        paddingVertical:'2%',
        fontSize:12,
        color:'white'
    },
    imageContent: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%', 
        height: '55%',

    },
    image:{

        alignItems: "center", 
        justifyContent: 'center', 
        height: '100%', 
        width: '100%', 
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    footer:{
flex:1,
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center' ,
        paddingVertical:'6%',
        color:'white'
    },
})