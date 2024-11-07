import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default function OrderScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { item, price = 0, table } = route.params;  // Recibe también 'table'

  // Asegúrate de que todos los parámetros sean cadenas
  const itemName = item ? String(item) : 'Producto no disponible';  // Convierte a cadena
  const tableNumber = table ? String(table) : 'Mesa no asignada';  // Asegura que 'table' sea una cadena

  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const total = (quantity * price).toFixed(2);  // Total calculado

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      {/* Botón de Retroceso */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Atrás</Text>
      </TouchableOpacity>

      {/* Imagen del Ítem */}
      <Image
        source={require('../assets/icon.png')}  // Verifica la ruta de la imagen
        style={styles.image}
      />

      {/* Título del Ítem */}
      <Text style={styles.title}>{itemName}</Text>

      {/* Mesa */}
      <Text style={styles.tableText}>Mesa: {tableNumber}</Text>

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

      {/* Botón para Agregar al Pedido */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          // Navega a PedidoSelection con todos los detalles, incluyendo 'table'
          navigation.navigate('PedidoSelection', {
            item: itemName,  // Pasa el 'item' como cadena
            price,
            quantity,
            notes,
            total,
            table: tableNumber  // Pasa el 'table' como cadena
          });
        }}
      >
        <Text style={styles.addButtonText}>Agregar al Pedido</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
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
  image: {
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
  tableText: {
    fontSize: 18,
    color: 'white',
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
