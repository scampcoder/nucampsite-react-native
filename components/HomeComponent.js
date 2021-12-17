import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from 'react-native-elements';
import { CAMPSITES } from "../shared/campsites";
import { PROMOTIONS } from "../shared/promotions";
import { PARTNERS } from "../shared/partners";


function RenderItem({item}) {
    if(item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/react-lake.jpg')}>
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

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
            <ScrollView>

            </ScrollView>
        );
    }
    
}

export default Home;