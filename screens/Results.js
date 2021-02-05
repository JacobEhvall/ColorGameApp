import React, { useState,useContext } from 'react';
import { Text, FlatList,SafeAreaView, StyleSheet, View } from 'react-native';

export default function Results() { 
    const playersArray  = [
    
      { points:1,  player:'Jacob' },
      { points:2,  player:'Ello' },
      { points:1,  player:'Benny' },
    
    ];
    const [playerList, setPlayerList] = useState(playersArray)

    return(
    <SafeAreaView style={styles.container}>
    <Text style={styles.header}>HIGHSCORE</Text>
    
    <FlatList
     style={{ width:350, height:80, margin:30, padding:20}}
     data={playerList}
     renderItem = {({item }) => <GameInfo player = {item.player} points = {item.points}/> }
     />
    </SafeAreaView>
    )
  }
  const GameInfo = ({player, points}) => {
      return(
        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:20}}>
          <Text style={{margin:10, fontWeight:'bold', fontSize:20}}>{player}</Text>
          <Text style={{margin:10, fontWeight:'bold', fontSize:20}}>{points} POINTS</Text>
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
