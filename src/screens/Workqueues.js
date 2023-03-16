import React from 'react';
import {FlatList} from 'react-native';
import {DATA} from '../data/data';
import GridItem from './../components/GridItem';

const WorkQueues = ({ navigation }) => {

    const onSelectGridItem = (item) => {
        
        navigation.navigate('Queue', {
            id: item.id,
            name: item.name,
            status: item.status
        })
    }

    const renderGridItem = ({ item }) => <GridItem item={item} onSelect={onSelectGridItem} />

    return (
        <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}        
        />
    )
};

export default WorkQueues;
