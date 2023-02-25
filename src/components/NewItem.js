import {TextInput, View, Button } from 'react-native';
import React from 'react';
import styles from '../../styles';

const NewItem = ({
    placeholder,
    onChangeText,
    onPress,
    itemText
}) => {
    return (
        <View style={styles.addItemInputContainer} >
            <TextInput placeholder={placeholder} style={styles.input} onChangeText={onChangeText} value={itemText} />
            <Button title='Agregar' onPress={onPress}/>        
      </View>
    );
};

export default NewItem;