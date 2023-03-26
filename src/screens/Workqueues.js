import React, {useEffect} from 'react';
import { FlatList} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import GridItem from '../components/GridItem';
import { selectQueue,filterQueues } from '../store/actions/queues.action'

const WorkQueues = ({ navigation }) => {
    
    const status = useSelector(state=>state.statuses.selected)
    const queues = useSelector(state=>state.queuesList.filterQueues)
    
    const dispatch = useDispatch()
    

    useEffect(()=>{                
        
        dispatch(filterQueues(status.id))    
        console.log(queues);
    },[])

    const onSelectGridItem = (item) => {        
        dispatch(selectQueue(item.id))
        navigation.navigate('Queue', {            
            name: item.name            
        })
    }

    const renderGridItem = ({ item }) => <GridItem item={item} onSelect={onSelectGridItem} />

    return (
        <FlatList
            data={queues}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}        
        />
    )
};

export default WorkQueues;