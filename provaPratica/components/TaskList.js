import React, { useState } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  const [isDescending, setIsDescending] = useState(true);

  const sortedTasks = [...tasks].sort((a, b) => {
    const priorities = { Alta: 3, Média: 2, Baixa: 1 };
    return isDescending
      ? priorities[b.priority] - priorities[a.priority]
      : priorities[a.priority] - priorities[b.priority];
  });

  return (
    <View style={{ flex: 1 }}>
      <Button
        title={`Ordenar: ${isDescending ? 'Maior para Menor' : 'Menor para Maior'}`}
        onPress={() => setIsDescending(!isDescending)}
      />
      <FlatList
        data={sortedTasks}
        keyExtractor={(item) => item.id || item.name} 
        renderItem={({ item }) => (
          <TaskItem task={item} deleteTask={deleteTask} editTask={editTask} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: { marginVertical: 10 },
});
export default TaskList;
