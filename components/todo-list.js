import React, {Component} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Todo from './todo';

export default class TodoList extends Component {
    render() {
        return (
            <View style={styles.lista}>
                <ScrollView >
                    {this.props.todoList.map((todo, index) => (
                    <Todo
                        navigation={this.props.navigation}
                        key={index} 
                        text={todo.text}
                    />
                    ))}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    lista: {
        width: '100%',
        flex: 1,
        padding: 20,
        backgroundColor: '#ff7961'
    },
})
