import { StyleSheet } from "react-native" 


export const styles = StyleSheet.create({
    container: {
    backgroundColor: '#131016',
    flex: 1 ,
    padding:24 },
    
    eventName:{
      fontSize: 24,
      color: 'white',
      fontWeight: 'bold',
      marginTop: 24
    },
    eventDate:{
      fontSize: 16,
      color: '#6B6B6B'
    },
    input: {
      flex: 1 ,
      height: 56,
      backgroundColor: '#1F1E25',
      color: 'white',
      borderRadius: 5,
      padding: 16,
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 7
      
      
    },

    textbutton: {
      color: 'white',
      fontSize: 24
    },

    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    } ,
    
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 24,

    },

    textListEmpty: {
      color: 'white',
      textAlign:'center',
      fontSize:14
    }

    
  })