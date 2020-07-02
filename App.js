import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button} from 'react-native';
import { Map, Modal, Panel, Input, List } from './components';


export default function App() {
  const [puntos, setPuntos] = useState([]);
  const [puntoTemp, setPuntoTemp] = useState({});
  const [visibility, setVisibility] = useState(false);
  const [nombre, setNombre] = useState('');
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto'); // new_punto, all_puntos
  const [pointsFilter, setPointsFilter] = useState(true);

  const togglePointsFilter = () => setPointsFilter(!pointsFilter);

  const handleLongPress = ({ nativeEvent }) => {
    // const newPuntos = puntos.concat({ coordinate: nativeEvent });
    setVisibilityFilter('new_punto');
    setPuntoTemp(nativeEvent.coordinate);
    setVisibility(true);
    // setPuntos(newPuntos);
  }
  const handleChangeText = text => {
    setNombre(text)
  }
  const handleCloseModal = () => {
    setVisibility(false);
  }
  const handleViewList = () => {
    setVisibilityFilter('all_puntos');
    setVisibility(true);
  }

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto));
    setVisibility(false);
    setNombre('');
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter}/>
      <Modal visibility={visibility}>
        {
          visibilityFilter === 'new_punto' ? 
          <View style={styles.form}>
            <Input 
              title={"Agregar nombre"}
              placeholder={"Nombre del punto"}
              onChangeText={handleChangeText}
              />
            <Button
              title={'Aceptar'}
              onPress={handleSubmit}
            />
          </View>
          :
          <List handleClose={handleCloseModal} puntos={puntos} />
        }
      </Modal>
      <Panel 
        onPressLeft={handleViewList} 
        textLeft={'Lista'} 
        togglePointsFilter={togglePointsFilter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
