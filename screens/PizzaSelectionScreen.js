import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function PizzaSelectionScreen() {
  const navigation = useNavigation();

  const pizzas = [
    'Pizza Margarita',
    'Pizza Napolitana',
    'Pizza de Pepperoni',
    'Pizza de Queso',
    'Pizza Vegetariana',
    'Pizza Hawaiana',
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={40} color="white" />
        </TouchableOpacity>

        <Image source={require('../assets/pizza.jpg')} style={styles.image} />

        <Text style={styles.title}>Seleccione su Pizza</Text>

        {pizzas.map((pizza, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{pizza}</Text>
            <TouchableOpacity
              style={styles.orderButton}
              onPress={() => navigation.navigate('Order', { item: pizza })}
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
      paddingTop: 50, // Spacing from the top
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
