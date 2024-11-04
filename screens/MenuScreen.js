import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function MenuScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { table } = route.params; // Nombre de la mesa seleccionada

  return (
    <View style={styles.container}>
      {/* Botón de regreso */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={40} color="white" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo de La Cuesta Restaurant */}
        <Image
          source={require('../assets/icon.png')} // Asegúrate de que esta ruta sea correcta
          style={styles.logo}
        />

        {/* Título con el nombre de la mesa seleccionada */}
        <Text style={styles.tableText}>Seleccionada Mesa {table}</Text>

        {/* Contenedor del Menú */}
        <View style={styles.menuContainer}>
          <Text style={styles.menuTitle}>Seleccione para hacer un Pedido</Text>
          <Text style={styles.menuSubtitle}>MENÚ</Text>
          <View style={styles.separator} />

          {/* Opciones de menú */}
          {['Hamburguesas', 'Bebidas', 'Lomitos', 'Milanesas', 'Empanadas', 'Pizza'].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => {
                if (item === 'Hamburguesas') {
                  navigation.navigate('BurgerSelection', { table });
                } else if (item === 'Bebidas') {
                  navigation.navigate('BebidasSelection', { table });
                } else if (item === 'Lomitos') {
                  navigation.navigate('LomitoSelection', { table });
                } else if (item === 'Milanesas') {
                  navigation.navigate('MilanesasSelection', { table });
                } else if (item === 'Empanadas') {
                  navigation.navigate('EmpanadaSelection', { table });
                } else if (item === 'Pizza') {
                  navigation.navigate('PizzaSelection', { table });
                }
              }}
            >
              <Text style={styles.menuItemText}>{item}</Text>
              {['Hamburguesas', 'Lomitos', 'Milanesas'].includes(item) && (
                <Text style={styles.subItemText}>incluye papas</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252736',
    alignItems: 'center',
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  tableText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  menuContainer: {
    width: '80%',
    backgroundColor: '#AB5F45', // color de fondo del contenedor del menú
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  menuTitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  menuSubtitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  menuItem: {
    width: '100%', // Ancho fijo del item
    paddingVertical: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  menuItemText: {
    color: 'black',
    fontSize: 18,
  },
  subItemText: {
    color: 'black',
    fontSize: 14,
    marginTop: 5,
  },
});
