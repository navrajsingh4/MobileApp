/**
 * My To Do List App
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import {View,} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

export default function App() {
    const Stack = createStackNavigator();
    const [tasks,setTasks]=useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
      ]);
    const addTask = (task) => {
        setTasks([...tasks, task]);
    };
    return (
        <NavigationContainer>
        <View>
        <ToDoList tasks={tasks}/>
        <ToDoForm addTask={addTask} />
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
        </View>
        </NavigationContainer>
    );
}



