import { StyleSheet,Text,View } from "react-native";
import React from "react";
import {FlatList} from 'react-native';

import { COMPLETED } from './../data/completed';
import GridItem from '../components/GridItem';

const onSelectGridItem = (item) => {
        
    navigation.navigate('Queue', {
        id: item.id,
        name: item.name,
        status: item.status
    })
}

const renderGridItem = ({ item }) => <GridItem item={item}  onSelect={onSelectGridItem} />

const CompletedQueues = () => {
    return (
        <FlatList
            data={COMPLETED}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}        
        />
    )
}

export default CompletedQueues;