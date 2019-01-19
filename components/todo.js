import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native'


export default class Todo extends Component {
    render() {
        return (
            <View>
                <Text style={styles.todoText}>
                    {this.props.text}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    todoText: {
        fontSize: 20,
        margin: 5
    }
})