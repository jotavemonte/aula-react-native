/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TodoList from './components/todo-list';
import AddTodo from './components/add-todo';
import {
  createStackNavigator, createAppContainer
} from 'react-navigation';

const DefaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#1564bf',
    color: 'white'
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'white'
  },
}

class TodoDetails extends Component {
  static navigationOptions = {
    ...DefaultNavigationOptions,
    title: 'Navigation Options',
  }
  render() {
    return (
      <View>
        <Text>Mudei de página</Text>
      </View>
    )
  }
}

class Home extends Component {
  static navigationOptions = {
    ...DefaultNavigationOptions,
    title: 'Todo App',
  }

  constructor(props) {
    super(props);
    // setTimeout(() => {
    //   this.props.navigation.navigate('TodoDetails')
    // }, 3000)
    this.state = {
      todos: []
    }
  }

  submit = (objText) => {
    this.setState((state) => {
      return { todos: [objText, ...state.todos] }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <AddTodo submitFunc={this.submit} />
        <TodoList todoList={this.state.todos} navigation={this.props.navigation} />
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

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  TodoDetails: { screen: TodoDetails }
})

export default createAppContainer(AppNavigator);