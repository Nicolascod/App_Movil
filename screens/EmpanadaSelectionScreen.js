import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function EmpanadaSelectionScreen() {
  const navigation = useNavigation();

  // Lista de empanadas con nombre y precio
  const empanadas = [
    { name: 'Empanada de Carne', price: 150 },
    { name: 'Empanada de Pollo', price: 140 },
    { name: 'Empanada de Jamón y Queso', price: 160 },
    { name: 'Empanada de Verduras', price: 130 },
    { name: 'Empanada de Queso', price: 140 },
    { name: 'Empanada Picante', price: 155 },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Botón de regreso */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={40} color="white" />
        </TouchableOpacity>

        {/* Imagen de Empanadas */}
        <Image source={require('../assets/empanadas.jpg')} style={styles.image} />

        {/* Título */}
        <Text style={styles.title}>Seleccione su Empanada</Text>

        {/* Lista de empanadas */}
        {empanadas.map((empanada, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{`${empanada.name} - ${empanada.price}€`}</Text>
            <TouchableOpacity
              style={styles.orderButton}
              onPress={() => navigation.navigate('Order', { item: empanada.name, price: empanada.price })}
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
  image: {
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
  item: {
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
  itemText: {
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
