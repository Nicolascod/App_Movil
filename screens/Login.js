import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon.png')} style={styles.logo} />

      <Text style={styles.title}>Inicio de Sesion</Text>
      <Text style={styles.subtitle}>Inicia Sesion Para ingresar a Las Comandas</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electronico"
        placeholderTextColor="#C4C4C4"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#C4C4C4"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Acceder</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>¿Olvido Su Nombre de Usuario o Contraseña?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262833',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#FFFFFF',
    marginBottom: 30,
  },
  label: {
    alignSelf: 'flex-start',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#3E404D',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#AD6438',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#FFFFFF',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default Login;
