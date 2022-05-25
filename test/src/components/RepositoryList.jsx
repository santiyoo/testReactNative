import React from "react";
import {Text, FlatList} from 'react-native'
import Repositories from "../data/Repositories.js";
import RepositoryItem from "./RepositoryItem.jsx";

const RepositoryList = () => {
    return ( 
        <FlatList 
            data={{Repositories}} 
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => (
                <RepositoryItem props={repo}/>
            )}
        />
    );
}
 
export default RepositoryList;
