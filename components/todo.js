import React, {Component} from 'react';
import {
    View, Text, StyleSheet, TouchableNativeFeedback
} from 'react-native'


export default class Todo extends Component {
    render() {
        return (
            <TouchableNativeFeedback onPress={
                () => this.props.navigation.navigate('TodoDetails')
                }>
                <View style={styles.container}>
                    <Text style={styles.todoText}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:  1,
        width: '100%',
        padding: 7.5,
        borderRadius: 5,
        marginBottom: 7.5,
        elevation: 3,
        backgroundColor: '#e1f5fe'
    },
    todoText: {
        fontSize: 20,
        color: 'black'
    }
})