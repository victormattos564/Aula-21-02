import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
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

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
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
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.text}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        {tasks.length === 0 ? (
          <Text style={styles.textRed}>Nenhuma Tarefa Cadastrada</Text>
        ) : (
          <Text style={styles.textGreen}>Tarefas Cadastradas</Text>
        )}


      </View>

      <ScrollView style={styles.scrolllist} showsVerticalScrollIndicator={false}>
        {tasks.map((task) => (
          <View
            key={task.id}
            style={styles.listItem}
          >
            <Text style={styles.widthText}>{task.value}</Text>
            <TouchableOpacity
              onPress={() => removeTask(task.id)}
              style={styles.removeButton}
            >
              <Text style={styles.removeButton}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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
  scrolllist: {
    marginBottom: 24,
  },

  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
  },
  widthText: {
    width: '75%',
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
});