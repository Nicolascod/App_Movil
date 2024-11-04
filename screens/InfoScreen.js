import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function InfoScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Botón para regresar */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={40} color="white" />
      </TouchableOpacity>

      {/* Contenido de información */}
      <View style={styles.infoContainer}>
        <MaterialIcons name="info" size={40} color="#2c2c3e" />
        <Text style={styles.infoText}>
          Somos La Cuesta, una empresa gastronómica ubicada en Coronel Moldes para ofrecerte la mejor gastronomía salteña.
        </Text>
      </View>

      {/* Logo del restaurante */}
      <Image source={require('../assets/icon.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#252736', alignItems: 'center', justifyContent: 'center' },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
  },
  infoContainer: {
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  infoText: {
    color: '#2c2c3e',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  logo: { width: 150, height: 150, marginTop: 30 },
});
