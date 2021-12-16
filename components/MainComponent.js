import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { createStackNavigator } from 'react-navigation-stack';
import CampsiteInfo from './CampsiteInfoComponent';
import { View, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        CampsiteInfo: { screen: CampsiteInfo }
    },
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: #fff
            }
        }
    }
);

const AppNavigator = createAppContainer(DirectoryNavigator); //typically wrap the top level nav w/ 'createAppContainer'

class Main extends Component {

    render() {
        return (
            <View 
                style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}> {/* conditional code for screen size. If not ios OS, uses expo constant */}
                <AppNavigator />
            </View>
        )
    }
}

export default Main;