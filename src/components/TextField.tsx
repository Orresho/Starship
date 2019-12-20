import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

interface TextFieldProps {
    value: String,
}

export const TextField: React.SFC<TextFieldProps> = () => {
    const [value, onChangeText] = React.useState('Useless placeholder')
    return (
        <View style={styles.container}>
            <TextInput 
                  style={styles.textField}
                  onChangeText={text => onChangeText(text)}
                  value={value}
            />
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textField: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1 
    },
    
})