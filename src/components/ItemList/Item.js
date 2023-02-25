import {Text, Pressable } from 'react-native';
import React from 'react';
import styles from '../../../styles';

const Item = ({
    itemData,
    onPress
}) => {
    return (
        <Pressable 
            style={styles.itemContainer}
            onPress={()=>{                            
                onPress(itemData.item);
            }}
        >
            <Text style={styles.item}>{itemData.item.value}</Text>
            {
                itemData.item.status === "Pendiente" ? <Text style={[styles.badge, styles.badgePending]}>{itemData.item.status}</Text> : 
                <Text style={[styles.badge, styles.badgeCompleted]}>{itemData.item.status}</Text>
            }              
        </Pressable>            
    );
};

export default Item;