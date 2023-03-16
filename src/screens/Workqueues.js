import React from 'react';
import {FlatList} from 'react-native';
import {DATA} from '../data/data';

const WorkQueues = ({ navigation }) => {

    const onSelectGridItem = (item) => {
        navigation.navigate('Queue', {
            categoryId: item.id,
            categoryName: item.name
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
