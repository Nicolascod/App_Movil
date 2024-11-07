import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function PedidoScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { item, price, quantity, notes, total, table } = route.params;

  // Asegúrate de que todos los parámetros sean cadenas
  const itemName = item ? String(item) : 'Producto no disponible';  // Convierte a cadena
  const tableNumber = table ? String(table) : 'Mesa no asignada';  // Asegura que 'table' sea una cadena
  const notesText = notes ? String(notes) : 'No hay notas';  // Convierte 'notes' a cadena

  return (
    <View style={styles.container}>
      {/* Botón de Retroceso */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Atrás</Text>
      </TouchableOpacity>

      {/* Detalles del Pedido */}
      <Text style={styles.title}>Pedido: {itemName}</Text>
      <Text style={styles.tableText}>Mesa: {tableNumber}</Text>
      <Text style={styles.sectionTitle}>Cantidad: {quantity}</Text>
      <Text style={styles.sectionTitle}>Total: ${total}</Text>
      
      {/* Notas Adicionales */}
      <Text style={styles.sectionTitle}>Notas Adicionales:</Text>
      <Text style={styles.notesText}>{notesText}</Text>

      {/* Botón para Confirmar el Pedido */}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => {
          // Aquí puedes agregar la lógica para confirmar el pedido o enviar los datos
        }}
      >
        <Text style={styles.confirmButtonText}>Confirmar Pedido</Text>
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
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  tableText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 10,
  },
  notesText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#d99352',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#2c2c3e',
    fontSize: 18,
    fontWeight: 'bold',
  },
});