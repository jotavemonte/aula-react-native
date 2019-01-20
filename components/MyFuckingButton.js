import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';


export default MyButton = ({title, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{backgroundColor: 'purple'}}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}