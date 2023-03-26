import React from 'react';
import { FlatList } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import GridItem from './../components/GridItem';
import { selectStatus } from '../store/actions/status.action';

const EmptyQueues = ({navigation}) => {
    
    const statuses = useSelector(state=>state.statuses.statuses)
    const dispatch = useDispatch()    

    const onSelectedSatus = (item) => {
        dispatch(selectStatus(item.id))        
        navigation.push("List",{name:item.name})  
    }

    const renderGridItem = ({item}) =>{
        return(
            <GridItem item={item} onSelect={onSelectedSatus} />
        )
    }

    return (        
        <FlatList 
            data={statuses}
            renderItem={renderGridItem}
            keyExtractor={item=>item.id}
            numColumns={1}
        />
    )
};

export default EmptyQueues;
