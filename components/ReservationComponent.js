import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet,
    Picker, Switch, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campers: 1,
            hikeIn: false,
            date: new Date()
        };
    }

    static navigationOptions = {
        title: 'Reserve Campsite'
    }

    handleReservation() {
        console.log(JSON.stringify(this.state));
        this.setState({
            campsers: 1,
            hikeIn: false,
            date: new Date()
        });
    }
}

export default Reservation;