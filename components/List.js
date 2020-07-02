import React from 'react';
import { StyleSheet, FlatList, View, Text, Button, Dimensions } from 'react-native';


export default ({ puntos, handleClose }) => {
    
    return (
        <>
            <View style={styles.list}>
                <FlatList 
                    data={puntos.map(x => x.name)}
                    renderItem={({item}) =>
                        <View style={styles.item}>
                            <Text> {item} </Text>
                        </View>
                    }
                    keyExtractor={item => item}
                />
            </View>
            <View style={styles.button}>
                <Button title={'Cerrar modal'} onPress={handleClose} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 15,
    },
    list: {
        height: Dimensions.get('window').height - 250
    },
    item: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 40,
        justifyContent: 'center',
        padding: 10
    }
});
  