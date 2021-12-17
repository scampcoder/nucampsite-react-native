import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from 'react-native-elements';
import { CAMPSITES } from "../shared/campsites";
import { PROMOTIONS } from "../shared/promotions";
import { PARTNERS } from "../shared/partners";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            partners: PARTNERS

        }
    }
    static navigationOptions = {
        title: 'Home'
    } 
    
    render() {
        return (
            <View>
                <Text>Home Component</Text>
            </View>
        );
    }
    
}

export default Home;