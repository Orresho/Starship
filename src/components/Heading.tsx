import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

interface HeaderProps {
    children: React.ReactChild
}

export const H1: React.SFC<HeaderProps> = ({ children }) => {
    return (
        <Text style={styles.h1}>{children}</Text>
    );
}

export const H2: React.SFC<HeaderProps> = ({ children }) => {
    return (
        <Text style={styles.h2}>{children}</Text>
    )
}

export const H3: React.SFC<HeaderProps> = ({ children }) => {
    return (
        <Text style={styles.h3}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 40
    },
    h2: {
        fontSize: 32
    },
    h3: {
        fontSize: 26,
        color: 'black'
    }
})
