import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <ScrollView>
    <View style={styles.container}>

      <Image style={styles.image} source={require('./assets/logojg.png')}/>

      <View style={styles.containerHeader}>


      <Text style={styles.message}>LOGIN</Text>
      </View>

      <View style={styles.containerForm}>

      <Text style={styles.title}>Email</Text>
      <TextInput
      multiline
      placeholder="Digite seu email"
      style={styles.input}
      value={email}
      onChangeText={setEmail}
      />

      <Text style={styles.title}>Senha</Text>
      <TextInput
      keyboardType="numeric"
      multiline
      placeholder="Digite sua senha"
      style={styles.input}
      value={senha}
      onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button}
      onPress={() => {
        if (email === '' || senha === ''){
          alert('Por favor, preencha todos os campos!');
        } else {
          alert('Calma prof, ainda estamos trabalhando nisso =D')
        }
      }}
      >

       <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonC}>
        <Text style={styles.cText}> Não está registrado? Cadastre-se</Text>
      </TouchableOpacity>

      </View>

    </View>
    </ScrollView>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff7a00',
    
  },

  containerHeader: {
    marginTop: '10%',
    marginBottom:'12%',
    paddingStart: '5%'
  },

  message: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },

  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },

  title: {
    fontSize: 20,
    marginTop: 28,
    marginBottom: 10,
  },

  input:{
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    borderColor: '#fca61f',
    
  },

  button:{
    backgroundColor: '#ff7a00',
    width: '100%',
    borderRadius: 4,
    paddingVertical : 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },

  buttonC:{
    marginTop: 14,
    alignSelf: 'center'
  },

  cText:{
    color: '#a1a1a1'
  },

  image: {
    marginTop: 50,
    alignSelf: 'center',
    width: 100,
    height: 100,
  }


});
