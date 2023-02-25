import {FlatList} from 'react-native';
import React from 'react';
import Item from "./Item";

const ListItem = ({
    items,
    onPressItem
}) => {
  return ( 
    <FlatList
        data={items}
        renderItem={(itemData) => {
            return <Item itemData={itemData} onPress={onPressItem} />;
          }         
        }
        keyExtractor={(item)=> item.id.toString()}
    />
  );
};

export default ListItem;