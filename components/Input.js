import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

//Rest operator para juntar todas las propiedades
//Spreed operator dividir las propiedades
export default ({ title, ...rest }) => {
    return (
        <View style={styles.wrapper}>
            <Text>{title}</Text>
            <TextInput 
                {...rest}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: 40,
    }
});