import { Home } from './src/screens/Home'
import { Participants } from './src/components/Participants/Participants'
import { View , StatusBar } from 'react-native'

export default function App(){
  return(
    <>
    <StatusBar 
    barStyle={'light-content'}
    backgroundColor='transparent'
    translucent
    />
    <Home />
  

   </> 
  )
}

