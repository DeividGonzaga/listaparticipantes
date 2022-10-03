
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';

import { styles } from './style';
import { Participants } from '../../components/Participants/Participants';

export function Home(){
   const [participantes , setParticipantes] = useState<string[]>([])
   const [participanteName, setParticipanteName] = useState('')
   
  
  const addparticipante = () => {
     if(participantes.includes(participanteName)){
      return Alert.alert("Participante existe","Ja existe um participante com esse nome")
    }

    setParticipantes(dadosDeAntes => [...dadosDeAntes,participanteName]);
    setParticipanteName('')
  }
  
  const removeparticipante = (name: string) => {
   Alert.alert("Remover",`Deseja Remover o participante ${name}?`, [
    {
      text: 'Sim',
      onPress: () => setParticipantes(dadosDeAntes => dadosDeAntes.filter(participantes => participantes !== name))
    },
    {
      text: 'Não',
      style:'cancel'

    }
   ])


  }

  return(
    <View style={styles.container}>

    <Text style={styles.eventName}>
      Evento Assemble
      </Text >

    <Text style={styles.eventDate}
    >Quarta, 21 de setembro de 2022
    </Text>

    <View style={styles.form}>
    <TextInput 
    style={styles.input}
    placeholder="Nome do participante"
    placeholderTextColor="#6B6B6B"
    onChangeText={setParticipanteName}
    value={participanteName}
    />

    <TouchableOpacity style={styles.button} onPress={addparticipante}>
      <Text style={styles.textbutton}>+</Text>
    </TouchableOpacity>
    </View>

<FlatList
data={participantes}
keyExtractor={item => item} 
renderItem={({item}) => (
  <Participants 
    key={item}
    name={item} 
    onRemove={() => removeparticipante(item)}/> 

)}

showsHorizontalScrollIndicator={false}
ListEmptyComponent={() => (
  <Text style={styles.textListEmpty}>
    Ninguem chegou no evento ainda. Adicione-se a Lista de participante
  </Text>
)}
/>

    
    </View>
  )
}