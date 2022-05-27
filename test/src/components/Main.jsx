import React from "react";
import { View, Text } from 'react-native'
import RepositoryList from "./RepositoryList.jsx";
import AppBar from "./AppBar.jsx";
import { Redirect, Switch, Route } from 'react-router-native'

const Main = () => {
    return(
        <View style={{ flex: 1 }}>
            <AppBar/>
            <Switch>
                <Route path='/' exact>
                    <RepositoryList/>
                </Route>
                <Route path='/signin' exact>
                    <Text>Working on it</Text>
                </Route>
                <Redirect to='/'/>
            </Switch>
        </View>
    )
}

export default Main;