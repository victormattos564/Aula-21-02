import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import React from 'react';

export default function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
	  if (task.trim().length > 0) {
	    setTasks([...tasks, { id: Math.random().toString(), value: task }]);
	    setTask('')
	  }
	};

  const removeTask = (id) => {
    setTasks(tasks => {
      return tasks.filter((task) => task.id !== id);
    });
  };
  
  return (
    <View style={styles.container}>
  <View style={styles.form}>
    <TextInput
      placeholder="Digite uma nova tarefa"
      style={styles.inputline}
      onChangeText={setTask}
      value={task}
    />
    <TouchableOpacity style={styles.button}  onPress={addTask}>
      <Text style={styles.text}>Adicionar</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.container2}>
  {tasks.length === 0 ? (
    <Text style={styles.textRed}>Nenhuma Tarefa Cadastrada</Text>
  ) : (
    <Text style={styles.textGreen}>Tarefas Cadastradas</Text>
  )}
  {
    tasks.map((task) => (
      <View key={task.id} style={styles.form}>
        <Text>{task.value}</Text>
        <TouchableOpacity style={styles.button} onPress={removeTask.bind(this, task.id)}>
          <Text style={styles.text}>Remover</Text>
        </TouchableOpacity>
      </View>
    ))
  
  }
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
    padding: 2,
    borderRadius: 4,
  },
  text: {
    color: 'white',
  },
  container2: {
    marginBottom: 6,
    marginTop: 12,
  },
  textRed: {
    textAlign: 'center',
    color: 'red',
    fontSize: 18,
  },
  textGreen: {
    textAlign: 'center',
    color: 'green',
    fontSize: 18,
  },
});