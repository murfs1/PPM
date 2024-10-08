import { View, Text, TextInput, Pressable, Alert, StyleSheet, FlatList } from "react-native";
import React, { useState } from 'react';

const TodoList = () => {
  const [title, setTitle] = useState<string>('');
  const [todo, setTodo] = useState<any[]>([
    {
      id: 1,
      title: 'Learn React Native',
      completed: false,
    },
  ]);
  
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentTodoId, setCurrentTodoId] = useState<number | null>(null);

  const handleAddOrUpdateTodo = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Please enter your todo');
      return;
    }

    if (isEditing && currentTodoId !== null) {
      const updatedTodo = todo.map(item => 
        item.id === currentTodoId ? { ...item, title } : item
      );
      setTodo(updatedTodo);
      setIsEditing(false);
      setCurrentTodoId(null);
    } else {

      const newTodo = {
        id: todo.length ? todo[todo.length - 1].id + 1 : 1, // Pastikan ID unik
        title: title,
        completed: false,
      };
      setTodo([...todo, newTodo]);
    }
    setTitle('');
  };

  const handleDeleteTodo = (id: number) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this todo?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => {
            const filteredTodo = todo.filter(item => item.id !== id);
            setTodo(filteredTodo);
          }
        }
      ]
    );
  };

  const handleEditTodo = (id: number) => {
    const todoToEdit = todo.find(item => item.id === id);
    if (todoToEdit) {
      setIsEditing(true);
      setCurrentTodoId(id);
      setTitle(todoToEdit.title);
    }
  };

  const handleToggleComplete = (id: number) => {
    const updatedTodo = todo.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodo(updatedTodo);
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.todoItem}>
      <Pressable onPress={() => handleToggleComplete(item.id)} style={{ flex: 1 }}>
        <Text style={[styles.todoText, item.completed && styles.completedText]}>
          {item.title}
        </Text>
      </Pressable>
      <Pressable onPress={() => handleEditTodo(item.id)} style={styles.editButton}>
        <Text style={styles.buttonText}>Edit</Text>
      </Pressable>
      <Pressable onPress={() => handleDeleteTodo(item.id)} style={styles.deleteButton}>
        <Text style={styles.buttonText}>Delete</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Input dan Tombol Add/Edit */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your todo"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <Pressable
          style={styles.addButton}
          onPress={handleAddOrUpdateTodo}
        >
          <Text style={styles.addButtonText}>{isEditing ? 'Update' : 'Add'} Todo</Text>
        </Pressable>
      </View>

      {/* Daftar Todo */}
      <FlatList
        data={todo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyText}>No todos available.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  todoText: {
    fontSize: 18,
    color: 'black',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  editButton: {
    backgroundColor: 'orange',
    padding: 5,
    borderRadius: 3,
    marginLeft: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 3,
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
    fontSize: 16,
  },
});

export default TodoList;
