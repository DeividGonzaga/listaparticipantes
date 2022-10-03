import { Text, View , TouchableOpacity, ProgressViewIOSComponent } from "react-native";

import { styles } from './style'

type Props = {
    name: string;
    onRemove: () => void;
}

export function Participants({ name, onRemove }:Props){
    return (
        <View style={styles.ViewdoParticipants}>

        <Text style={styles.name}>
            {name}
        </Text>

        <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.textbutton}>
            -
        </Text>
        </TouchableOpacity>

        </View>
    )
}