import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    if (editingTask) {
      setTasks((prev) =>
        prev.map((t) => (t.id === editingTask.id ? task : t))
      );
      setEditingTask(null);
    } else {
      setTasks((prev) => [...prev, { ...task, id: Date.now().toString() }]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  return (
    <ScrollView style={styles.container}> 
      <Text style={styles.title}>Gerenciador de Tarefas</Text>
      <TaskForm addTask={addTask} editingTask={editingTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
});
