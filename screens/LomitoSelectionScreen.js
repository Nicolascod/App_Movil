import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Usar useRoute para acceder a la mesa
import { MaterialIcons } from '@expo/vector-icons';

export default function LomitoSelectionScreen() {
  const navigation = useNavigation();
  const route = useRoute(); // Usar useRoute para obtener los parámetros de la pantalla anterior
  const { table } = route.params; // Obtener el parámetro 'table'

  // Lista de item con nombre y precio
  const lomitos = [
    { name: 'Lomito Clásico', price: 250 },
    { name: 'Lomito Completo', price: 300 },
    { name: 'Lomito con Queso', price: 280 },
    { name: 'Lomito con Jamón', price: 290 },
    { name: 'Lomito Vegetariano', price: 260 },
    { name: 'Lomito Picante', price: 275 },
  ];

  return (
    <View style={styles.container}>
      {/* Mostrar la mesa seleccionada */}
      <Text style={styles.tableInfo}>Mesa: {table}</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Botón de regreso */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={40} color="white" />
        </TouchableOpacity>

        {/* Imagen del Lomito */}
        <Image
          source={require('../assets/Lomito.png')} // Cambia esta ruta si es necesario
          style={styles.lomitoImage}
        />

        {/* Título */}
        <Text style={styles.title}>Seleccione su Lomito</Text>

        {/* Lista de opciones de lomitos */}
        {lomitos.map((lomito, index) => (
          <View key={index} style={styles.lomitoItem}>
            <Text style={styles.lomitoText}>{`${lomito.name} - ${lomito.price}€`}</Text>
            <TouchableOpacity
              style={styles.orderButton}
              onPress={() => navigation.navigate('Order', { 
                item: lomito.name, 
                price: lomito.price, 
                table: table // Pasar también el parámetro 'table'
              })}
            >
              <Text style={styles.orderButtonText}>Pedir +</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c3e',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 50, // Espaciado desde la parte superior
  },
  backButton: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 20,
  },
  lomitoImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  tableInfo: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  lomitoItem: {
    width: '85%',
    backgroundColor: '#AB5F45',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  lomitoText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
    textAlign: 'left',
  },
  orderButton: {
    backgroundColor: '#d99352',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  orderButtonText: {
    color: '#2c2c3e',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
