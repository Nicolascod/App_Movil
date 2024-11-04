import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function LomitoSelectionScreen() {
  const navigation = useNavigation();

  // List of lomito options
  const lomitos = [
    'Lomito Clásico',
    'Lomito Completo',
    'Lomito con Queso',
    'Lomito con Jamón',
    'Lomito Vegetariano',
    'Lomito Picante',
  ];

  return (
    <View style={styles.container}>
      {/* ScrollView to contain all items and back button */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={40} color="white" />
        </TouchableOpacity>

        {/* Lomito Image */}
        <Image
          source={require('../assets/Lomito.png')} // Update this path if needed
          style={styles.lomitoImage}
        />

        {/* Title */}
        <Text style={styles.title}>Seleccione su Lomito</Text>

        {/* List of lomito options */}
        {lomitos.map((lomito, index) => (
          <View key={index} style={styles.lomitoItem}>
            <Text style={styles.lomitoText}>{lomito}</Text>
            <TouchableOpacity
              style={styles.orderButton}
              onPress={() => navigation.navigate('Order', { item: lomito })}
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
    alignSelf: 'flex-start', // Align to the left within ScrollView
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
