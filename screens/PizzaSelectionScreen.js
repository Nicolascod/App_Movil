import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Importar useRoute
import { MaterialIcons } from '@expo/vector-icons';

export default function PizzaSelectionScreen() {
  const navigation = useNavigation();
  const route = useRoute(); // Usar useRoute para obtener los parámetros de la pantalla anterior
  const { table } = route.params; // Obtener el parámetro 'table'

  // Lista de pizzas con nombre y precio
  const pizzas = [
    { name: 'Pizza Margarita', price: 300 },
    { name: 'Pizza Napolitana', price: 320 },
    { name: 'Pizza de Pepperoni', price: 350 },
    { name: 'Pizza de Queso', price: 280 },
    { name: 'Pizza Vegetariana', price: 310 },
    { name: 'Pizza Hawaiana', price: 340 },
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

        {/* Imagen de Pizza */}
        <Image source={require('../assets/pizza.jpg')} style={styles.image} />

        {/* Título */}
        <Text style={styles.title}>Seleccione su Pizza</Text>

        {/* Lista de pizzas */}
        {pizzas.map((pizza, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{`${pizza.name} - ${pizza.price}€`}</Text>
            <TouchableOpacity
              style={styles.orderButton}
              onPress={() => navigation.navigate('Order', { 
                item: pizza.name, 
                price: pizza.price, 
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
    paddingTop: 50,
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
  tableInfo: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
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

