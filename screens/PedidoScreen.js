import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function PedidoScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  
  // Datos recibidos desde BurgerOrderScreen
  const { burger, quantity, notes, total } = route.params;

  return (
    <View style={styles.container}>
      {/* Botón de Retroceso */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>◀</Text>
      </TouchableOpacity>
      
      {/* Botón de Cancelar Pedido */}
      <TouchableOpacity style={styles.cancelButton} onPress={() => alert('Pedido cancelado')}>
        <Text style={styles.cancelButtonText}>Cancelar Pedido</Text>
      </TouchableOpacity>

      {/* Contenedor de Detalles del Pedido */}
      <View style={styles.orderContainer}>
        <Text style={styles.orderText}>{quantity} x {burger}</Text>
        <Text style={styles.tableText}>Mesa 1</Text>
        <Text style={styles.notesText}>Notas: {notes || "Sin notas adicionales"}</Text>
        <Text style={styles.totalText}>Total: ${total}</Text>

        {/* Botones de Modificar y Eliminar */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.modifyButton} onPress={() => alert('Modificar pedido')}>
            <Text style={styles.modifyButtonText}>Modificar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={() => alert('Eliminar pedido')}>
            <Text style={styles.deleteButtonText}>Eliminar</Text>
          </TouchableOpacity>
        </View>

        {/* Botón de Enviar Pedido */}
        <TouchableOpacity style={styles.submitButton} onPress={() => alert('Pedido enviado')}>
          <Text style={styles.submitButtonText}>Enviar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2B3A',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 5,
  },
  backButtonText: {
    fontSize: 20,
    color: 'white',
  },
  cancelButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF6F91',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  orderContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 80,
    padding: 20,
  },
  orderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  notesText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  modifyButton: {
    backgroundColor: '#A8700B',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modifyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#FF6F91',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
