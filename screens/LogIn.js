import React, { useState } from 'react';
import { useContext } from 'react';
import { StyleSheet, View, Text, Button, TextInput} from 'react-native';
import {AuthContext} from '../context/AuthContext';


export default function LogIn() {
  
     const [email, setEmail ] = useState('');
     const [password, setPassword ] = useState(''); 

     const { logIn } = useContext(AuthContext)

     const submit = () => {
       logIn(email,password)
     
    
    }

    return(
        <View style={styles.container}>
          <Text style={{margin:60, fontSize:65, fontFamily:'Party LET'}}>Guess the color</Text>
          <TextInput 
          placeholder='Ange mail...' 
          value={email}
          onChangeText={setEmail}
          
          style={{backgroundColor:'lightgray', width:'60%', height:'5%', paddingHorizontal:8}}
          />
          <TextInput 
          placeholder='Password...'
          type='Password'
          value={password}
          onChangeText={setPassword}
          style={{backgroundColor:'lightgray', width:'60%', height:'5%', margin:20, paddingHorizontal:8}}
          />
          <Button style={{flexDirection:'row'}}
          title="START GAME"
          color="darkblue"
          onPress={submit}/>
        </View>
      )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  header : {
    textAlign: 'center', 
    fontWeight: 'bold',
    margin:40,
    fontSize: 40,
  },
})