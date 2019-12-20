import * as React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default EmailLoginForm = () => {
    const [value, onChangeText] = React.useState('')
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textField}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder="E-mail"
            />
            <View style={{ marginBottom: 8 }} />
            <TextInput
                style={styles.textField}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder="Password"
            />
            <View style={{ marginBottom: 8 }} />
            <TouchableOpacity style={[styles.button, styles.facebookBtn]} onPress={this.handleOnLogin}>
                <Text style={styles.facebookButtonText}>Sign in</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textField: {
        height: 40,
        borderColor: '#2c3e50',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 16

    },
    button: {
        height: 60,
        width: 280,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    facebookBtn: {
        color: '#1abc9c',
        backgroundColor: '#2c3e50'
    },
    facebookButtonText: {
        color: '#1abc9c',
        fontSize: 20
    },
})