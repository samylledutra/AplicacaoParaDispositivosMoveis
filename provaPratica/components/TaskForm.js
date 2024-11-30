import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const TaskForm = ({ addTask, editingTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Baixa');

  useEffect(() => {
    if (editingTask) {
      setName(editingTask.name);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
    } else {
      setName('');
      setDescription('');
      setPriority('Baixa');
    }
  }, [editingTask]);

  const handleSubmit = () => {
    if (!name) return alert('Nome da tarefa é obrigatório');
    addTask({ name, description, priority });
    setName('');
    setDescription('');
    setPriority('Baixa');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome da tarefa"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />
      <Text>Prioridade:</Text>
      <Picker selectedValue={priority} onValueChange={(itemValue) => setPriority(itemValue)}>
        <Picker.Item label="Alta" value="Alta" />
        <Picker.Item label="Média" value="Média" />
        <Picker.Item label="Baixa" value="Baixa" />
      </Picker>
      <Button title={editingTask ? 'Editar Tarefa' : 'Adicionar Tarefa'} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: { marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
});
export default TaskForm;
