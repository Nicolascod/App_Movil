import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function BurgerOrderScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { burger } = route.params;

  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const burgerPrice = 300; // Precio por hamburguesa
  const total = quantity * burgerPrice;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <View style={styles.container}>
      {/* Botón de Retroceso */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Atrás</Text>
      </TouchableOpacity>

      {/* Imagen de la Hamburguesa */}
      <Image
        source={require('../assets/icon.png')} // Reemplaza con la ruta de tu imagen
        style={styles.burgerImage}
      />

      {/* Título de la Hamburguesa */}
      <Text style={styles.title}>{burger}</Text>

      {/* Control de Cantidad */}
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

      {/* Sección de Notas */}
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

      {/* Precio Total */}
      <Text style={styles.totalText}>Total: ${total}</Text>

      {/* Botón para Agregar al Pedido y Navegar a PedidoScreen */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          // Navega a PedidoScreen con los detalles del pedido
          navigation.navigate('PedidoSelection', {
            burger,
            quantity,
            notes,
            total
          });
        }}
      >
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
