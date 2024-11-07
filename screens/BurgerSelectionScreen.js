import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function BurgerSelectionScreen() {
  const navigation = useNavigation();

  // Lista de tipos de hamburguesas
  const burgers = [
    {name:'Hamburguesa Clásica',price:300},
    {name:'Hamburguesa con Queso',price:200},
    {name:'Hamburguesa BBQ',price:250},
    {name:'Hamburguesa Doble',price:400},
    {name:'Hamburguesa de Pollo',price:350},
    {name:'Hamburguesa Vegetariana',price:200},
    {name:'Hamburguesa con Tocino',price:350},
    {name:'Hamburguesa Picante',price:500},
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={40} color="white" />
        </TouchableOpacity>

        <Image
          source={require('../assets/hamburguesa.png')}
          style={styles.burgerImage}
        />

        <Text style={styles.title}>Seleccione su Hamburguesa</Text>

        {burgers.map((burger, index) => (
          <View key={index} style={styles.burgerItem}>
            <Text style={styles.burgerText}>{`${burger.name} - ${burger.price}€`}</Text>
            <TouchableOpacity
              style={styles.orderButton}
              onPress={() => navigation.navigate('Order', { item: burger.name, price: burger.price })}
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
  burgerImage: {
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
  burgerItem: {
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
  burgerText: {
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
