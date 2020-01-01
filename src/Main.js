import * as React from 'react';
import {
    StyleSheet, TouchableWithoutFeedback, Keyboard
} from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Actions } from 'react-native-router-flux';
import { createAppContainer } from 'react-navigation';
import LoginScreenV2 from './screens/LoginScreenV2';
import RegisterScreen from './screens/RegisterScreen';
import {connect} from "react-redux";
const AppStackNavigator = createStackNavigator(
    {
        Home: LoginScreenV2,
        Register: RegisterScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(AppStackNavigator);

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);

        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    })
}

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            isReady: false
        }
    }

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
            require('./assets/images/splash2.jpg')
        ])

        await Promise.all([imageAssets])
    }

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._loadAssetsAsync}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn} />
            )
        }
        return (
            <DismissKeyboard>
                <AppContainer />
            </DismissKeyboard>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        borderRadius: 25,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
        borderColor: 'rgba(0,0,0,0.2)'
    }
})

export default connect(null,null)(Main)