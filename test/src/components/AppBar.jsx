import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText.jsx";
import Constants from 'expo-constants'
import theme from '../theme.js'
import { Link } from "react-router-native";

const AppBarTab = ({ active, children, to}) => {
    return(
        <Link to={to}>
            <StyledText fontWeight='bold' style={styles.text}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return (  
        <View style={styles.container}>
            <AppBarTab active to='/'>Repositories</AppBarTab>
            <AppBarTab active to='/signin'>Sign In</AppBarTab>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
        flexDirection: "row"
    },
    text:{
        color: theme.appBar.textPrimary,
        paddingHorizontal: 10
    }
})

export default AppBar;