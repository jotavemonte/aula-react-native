import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native';
import MyButton from './MyFuckingButton';

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
                <Button style={styles.inputButton}
                    onPress={this.onPressButton}
                    disabled={!this.state.text}
                    color='#f44336'
                    title="ADD"
                />
                {/* <MyButton
                    onPress={this.onPressButton}
                    title='ADD'
                /> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3584bf',
    },
    inputField: {
        flex: 1,
        borderRadius: 6,
        padding: 5,
        // borderWidth: 0.5,
        borderColor: '#000000',
        backgroundColor: '#FFF',
        marginRight: 10,
        // padding: 0  
    },
    inputButton: {
        flexShrink: 0,
    }
})