import React from "react";
import { View, StyleSheet } from 'react-native'
import RepositoryStats from './RepositoryStats.jsx';
import RepositoryItemHeader from './RepositoryItemHeader.jsx'

const RepositoryItem = (props) => {
    return (  
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader {...props}/>
            <RepositoryStats {...props}/>       
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingVertical: 5 //Para ponerle paddingTop + paddingBottom fusionado
    }
})
 
export default RepositoryItem;