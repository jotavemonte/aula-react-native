import React, {Component} from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Todo from './todo';

export default class TodoList extends Component {
    render() {
        return (
            <ScrollView style={styles.lista}>
                {this.props.todoList.map((todo, index) => (
                <Todo 
                key={index} 
                text={todo.text}
                />
                ))}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    lista: {
        flex: 1,
        margin: 20,
        width: '100%',
    }
})
