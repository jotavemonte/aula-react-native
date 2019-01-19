import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

export default class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
    }

    onPressButton = () => {
        this.props.submitFunc(this.state)
        this.setState(() => {
            return {text: ''}
        })
    }

    render() {        
        return (
            <View style={styles.container}>
                <TextInput 
                    onChangeText={text => this.setState({text})} 
                    value={this.state.text}
                    style={styles.inputField}
                    />
                <Button 
                    onPress={this.onPressButton}
                    title=" + "
                    style={styles.inputButton} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        backgroundColor: '#a6bf8b',
    },
    inputField: {
        flex: 1,
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#000000',
        backgroundColor: '#FFF',
        marginRight: 10,
    },
    inputButton: {
        flexShrink: 0,
    }
})