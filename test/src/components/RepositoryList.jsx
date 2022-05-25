import React from "react";
import {Text, FlatList, View} from 'react-native';
import Repositories from "../data/Repositories.js";
import RepositoryItem from "./RepositoryItem.jsx";

const RepositoryList = () => {
    return ( 
        <FlatList 
            data={Repositories} 
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo}/>
            )}
        />
    );
}
 
export default RepositoryList;
