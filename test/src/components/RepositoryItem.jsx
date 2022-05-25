import React from 'react';
import {View, StyleSheet} from 'react-native'
import StyledText from './StyledText';

const RepositoryItem = (props) => {
    return (  
        <View key={props.id} style={styles.container}>
            <StyledText fontSize='subheading' fontWeight='bold'>FullName: {props.fullName}</StyledText>
            <StyledText bold>Descripcion: {props.descripcion}</StyledText>
            <StyledText blue>Language: {props.language}</StyledText>
            <StyledText small>stargazersCount: {props.stargazersCount}</StyledText>
            <StyledText small>ratingAvarage: {props.ratingAvarage}</StyledText>
            <StyledText small>reviewCount: {props.reviewCount}</StyledText>            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingBotton: 5,
        paddingTop: 5
    }
})
 
export default RepositoryItem;