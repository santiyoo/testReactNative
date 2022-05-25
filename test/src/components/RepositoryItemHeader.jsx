import React from "react";
import {View, Image, StyleSheet} from 'react-native'
import StyledText from './StyledText.jsx';
import theme from "../theme.js";

const RepositoryItemHeader = (props) => {
    return ( 
        <View style={styles.orden}>
            <View style={{ paddingRight: 10}}>
                <Image style={styles.image} source={{uri: props.ownerAvatarUrl}} />
            </View>
            <View style={{flex: 1 }}>
                <StyledText fontWeight='bold'>{props.fullName}</StyledText>
                <StyledText color='secondary'>{props.descripcion}</StyledText>
                <StyledText style={styles.language}>{props.language}</StyledText>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
        marginVertical: 4 //Para ponerle marginTop + marginBottom fusionado
    },
    image:{
        width: 48,
        height: 48,
        borderRadius: 4
    },
    orden:{
        flexDirection: 'row',
        paddingBottom: 2,

    }
})

export default RepositoryItemHeader;
