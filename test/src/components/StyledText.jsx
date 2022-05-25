import React from "react";
import {Text, StyleSheet} from 'react-native'
import theme from '../theme.js'

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.TextPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    colorPrimary: {
        color: theme.colors.textPrimary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    subheading: {
        fontSize: theme.fontSizes.subheading,

    }
})
 
export default function StyledText ({children, color, fontSize, fontWeight, style, ...restOfProps}){
    const textSyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'primary' && styles.nold,
        
    ]
    return(
        <Text style={textStyles}>
            {children}
        </Text>
    )
}