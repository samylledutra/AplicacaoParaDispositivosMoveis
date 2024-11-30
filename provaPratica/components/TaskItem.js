import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TaskItem = ({ task, deleteTask, editTask }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{task.name}</Text>
      <Text>{task.description}</Text>
      <Text style={[styles.priority, styles[`priority${task.priority}`]]}>
        {task.priority}
      </Text>
      <View style={styles.actions}>
        <Button title="Editar" onPress={() => editTask(task)} />
        <Button title="Excluir" onPress={() => deleteTask(task.id)} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  name: { fontWeight: 'bold', fontSize: 16 },
  priority: { padding: 5, borderRadius: 5 },
  priorityAlta: { backgroundColor: 'red', color: 'white' },
  priorityMédia: { backgroundColor: 'orange', color: 'white' },
  priorityBaixa: { backgroundColor: 'green', color: 'white' },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
});
export default TaskItem;
