import React from "react";
import {StyleSheet, Button} from 'react-native';

const ButtonCustom = ({
    title,
    onPress
}) => {
    return (
        <Button style={styles.button} onPress={onPress} title={title} />
    )
};

export default ButtonCustom;

const styles = StyleSheet.create({
    button:{
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 10        
    }
})