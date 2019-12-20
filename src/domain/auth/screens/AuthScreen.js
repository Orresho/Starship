import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { H3 } from '../../../components/Heading';
import EmailLoginForm from './EmailLoginForm';
import firebase from 'react-native-firebase';
import PhoneAuth from './PhoneAuth';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            loginWithEmail: false,
        };
    }

    componentDidMount() {
        // TODO: You: Do firebase things

    }


    handleOnLogin = () => {
        this.setState({ loggedIn: !this.state.loggedIn })
    }

    togglePhoneLoginView = () => {
        this.setState({ loggedIn: false, loginWithEmail: true })
    }

    render() {
        const { loggedIn, loginWithEmail } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../../../assets/orhinder.png')} style={[styles.logo]} />
                </View>
                <View style={{ marginBottom: 50 }} />
                <View style={styles.signinButtons}>
                    <View>
                        <TouchableOpacity style={[styles.button, styles.facebookBtn]} onPress={this.handleOnLogin}>
                            <Text style={styles.facebookButtonText}>Sign in with Facebook</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.loginEmail}>
                        <TouchableOpacity style={[styles.button, styles.emailBtn]} onPress={this.togglePhoneLoginView}>
                            <Text style={styles.PhoneButtonText}>Sign in with Phone</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {loginWithEmail && (
                    <View style={styles.phoneForm}>
                        <View style={{ marginBottom: 16 }} />
                        <PhoneAuth />
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1abc9c'
    },
    logoContainer: {
        marginTop: -100,
        backgroundColor: "blue"
    },
    topic: {
        fontSize: 16,
        color: 'black'
    },
    signinButtons: {
        backgroundColor: "red"
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
    emailBtn: {
        color: '#2c3e50',
        backgroundColor: '#1abc9c',
        borderWidth: 1
    },
    facebookButtonText: {
        color: '#1abc9c',
        fontSize: 20
    },
    PhoneButtonText: {
        color: '#2c3e50',
        fontSize: 20
    },
    message: {
        height: 30
    },
    loginEmail: {
        height: 100
    },
    phoneForm: {
    }
});
