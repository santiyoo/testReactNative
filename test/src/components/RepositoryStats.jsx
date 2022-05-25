import React from "react";
import StyledText from "./StyledText.jsx";
import {View, StyleSheet} from 'react-native'

const parseThousands = value => {
    return value >= 1000
    ?`${Math.round(value/100) / 10}k` : String(value)
}

const RepositoryStats = props => {
    return (
        <View style={styles.container}>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(props.stargazersCount)}</StyledText>
                <StyledText align='center'>Stars</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(props.forksCount)}</StyledText>
                <StyledText align='center'>Forks</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(props.ratingAvarage)}</StyledText>
                <StyledText align='center'>Rate</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(props.reviewCount)}</StyledText>
                <StyledText align='center'>Review</StyledText>     
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})
 
export default RepositoryStats;