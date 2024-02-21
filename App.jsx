import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import React from 'react';

export default function App() {

  const [task, setTask] = useState('');
  
  return (
    <View style={styles.container}>
  <View style={styles.form}>
    <TextInput
      placeholder="Digite uma nova tarefa"
      style={styles.inputline}
      onChangeText={setTask}
      value={task}
    />
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Adicionar</Text>
    </TouchableOpacity>
  </View>
  <StatusBar style="auto" />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginTop: 24,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  inputline: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 2,
    width: '75%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 4,
  },
  text: {
    color: 'white',
  },
});