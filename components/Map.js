import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';


export default ({onLongPress, puntos=[], pointsFilter}) => {
    console.log('Manejo de puntos');
    console.log(puntos)
    return (
    <MapView
        onLongPress={onLongPress}
        style={styles.map}
    >
        {
            pointsFilter && puntos.map(x => 
            <Marker
                key={x.name}
                coordinate={x.coordinate}
                title={x.name}
            />)
        }
    </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
      height: Dimensions.get('window').height - 100,
      width: Dimensions.get('window').width
    },
});
  