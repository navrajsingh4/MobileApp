import {  StyleSheet,Text, Pressable, SafeAreaView, ScrollView, View } from "react-native";

import React from 'react';
export default function ToDoList({tasks}) {
    return(
        <SafeAreaView>
            <ScrollView>
                {tasks.map((task, index) => (
                    <Pressable key={index}>
                        <View style={[styles.task, styles.completed]}>
                            <Text style={styles.taskText}>{task}</Text>
                        </View> 
                    </Pressable>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
});