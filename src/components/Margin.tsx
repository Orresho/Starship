import * as React from 'react';
import { View } from 'react-native';

interface MarginProps {
    bottomMargin: string
}

export const Margin: React.SFC<MarginProps> = ({ bottomMargin }) => {
    return (
        <View style={{ marginBottom: bottomMargin }} />
    );
}

// const styles = StyleSheet.create({
//     h1: {
//         fontSize: 40
//     }
// })
