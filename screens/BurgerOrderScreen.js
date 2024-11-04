import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function BurgerOrderScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { burger } = route.params;

  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const burgerPrice = 300; // Set the price per burger
  const total = quantity * burgerPrice;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Atrás</Text>
      </TouchableOpacity>

      {/* Burger Image */}
      <Image
        source={require('../assets/icon.png')} // Replace with your image path
        style={styles.burgerImage}
      />

      {/* Burger Title */}
      <Text style={styles.title}>{burger}</Text>

      {/* Quantity Control */}
      <View style={styles.quantityContainer}>
        <Text style={styles.sectionTitle}>Cantidad del pedido</Text>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.counterButton}>
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.counterButton}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Notes Section */}
      <View style={styles.notesContainer}>
        <Text style={styles.sectionTitle}>Notas Adicionales</Text>
        <TextInput
          style={styles.notesInput}
          placeholder="Escribe toda la información sobre el pedido"
          placeholderTextColor="#888"
          multiline
          value={notes}
          onChangeText={setNotes}
        />
      </View>

      {/* Total Price */}
      <Text style={styles.totalText}>Total: ${total}</Text>

      {/* Add to Order Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => {
        // Here you could handle adding to cart or navigating
        alert(`Agregado al pedido: ${quantity} x ${burger} - Total: $${total}`);
        navigation.goBack();
      }}>
        <Text style={styles.addButtonText}>Agregar al Pedido</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c3e',
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
  },
  burgerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  quantityContainer: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 10,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterButton: {
    backgroundColor: '#d99352',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  counterText: {
    color: '#2c2c3e',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 20,
  },
  notesContainer: {
    marginVertical: 20,
  },
  notesInput: {
    backgroundColor: '#4c4c6e',
    color: 'white',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    textAlignVertical: 'top',
    height: 80,
  },
  totalText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  addButton: {
    backgroundColor: '#d99352',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#2c2c3e',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
