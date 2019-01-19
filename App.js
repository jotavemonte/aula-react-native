/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import TodoList from './components/todo-list';
import AddTodo from './components/add-todo';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  submit = (objText) => {
    this.setState((state) => {
      return { todos: [...state.todos, objText] }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <AddTodo submitFunc={this.submit} />
        <TodoList todoList={this.state.todos} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
});
