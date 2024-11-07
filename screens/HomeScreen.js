import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [selectedTable, setSelectedTable] = useState(null);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo del restaurante */}
      <Image source={require('../assets/icon.png')} style={styles.logo} />
      
      {/* Ícono de información */}
      <TouchableOpacity
        style={styles.infoIcon}
        onPress={() => navigation.navigate('Info')}
      >
        <MaterialIcons name="info" size={40} color="white" />
      </TouchableOpacity>

      {/* Bienvenida */}
      <Text style={styles.welcomeText}>!! Bienvenido a La Cuesta !!</Text>

      {/* Selección de mesas */}
      <View style={styles.tableContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((table) => (
          <TouchableOpacity
            key={table}
            style={[
              styles.tableButton,
              selectedTable === table && styles.selectedTable,
            ]}
            onPress={() => setSelectedTable(table)} // Mantiene la mesa seleccionada
          >
            <Text style={styles.tableText}>{table}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botón para seleccionar un plato (sólo visible si se selecciona una mesa) */}
      {selectedTable && ( // Muestra el botón solo si hay una mesa seleccionada
        <TouchableOpacity
          style={styles.selectButton}
          onPress={() => navigation.navigate('Menu', { table: selectedTable })} // Navega al menú pasando la mesa seleccionada
        >
          <Text style={styles.selectButtonText}>Seleccione Un Plato</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#252736', alignItems: 'center', paddingTop: 50 },
  logo: { width: 150, height: 150, marginBottom: 20 },
  infoIcon: { position: 'absolute', top: 50, right: 20 },
  welcomeText: { fontSize: 20, color: 'white', marginBottom: 20 },
  tableContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  tableButton: {
    width: 60,
    height: 60,
    backgroundColor: '#AB5F45',
    margin: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTable: { backgroundColor: 'green' },
  tableText: { color: 'white', fontSize: 20 },
  selectButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  selectButtonText: { color: 'white', fontSize: 16 },
});
