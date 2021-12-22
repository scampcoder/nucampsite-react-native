import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Home from './HomeComponent';
import { createStackNavigator } from 'react-navigation-stack';
import CampsiteInfo from './CampsiteInfoComponent';
import { View, Platform, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';
import About from './AboutComponent';
import Contact from './ContactComponent';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { 
            screen: Directory,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                        name='list'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                    />
            })
        },
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
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                        name='home'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                    />
        })
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                        name='info-circle'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                    />
        })
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                        name='address-card'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                        onPress={() => navigation.toggleDrawer()}
                    />
        })
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator },
        About: { screen: AboutNavigator },
        Contact: { screen: ContactNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
)

const AppNavigator = createAppContainer(MainNavigator); //typically wrap the top level nav w/ 'createAppContainer'

class Main extends Component {

    render() {
        return (
            <View 
                style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}> 
                <AppNavigator />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
})

export default Main;