import React, { Component } from 'react';
import { View, Button, Stylesheet } from 'react-native';
import { Input, Checkbox } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            remember: false
        };
    }

    static navigationOptions = {
        title: 'Login'
    }

    handleLogin() {
        console.log(JSON.stringify(this.state));
    }

}

export default Login;