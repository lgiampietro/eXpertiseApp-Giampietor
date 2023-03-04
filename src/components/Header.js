import {View,Text, StyleSheet} from 'react-native';
import { titleStyle } from './../constants/TextStyles';

const Header = ({
    title
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
};

export default Header;

const styles = StyleSheet.create({
    headerTitle:{
        ...titleStyle,
    },
    container: {
        width: '100%',
        height: 90,
        paddingTop: 30,
        marginLeft:20,        
        backgroundColor:'white'        
    },
})