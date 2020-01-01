import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions, TextInput, TouchableOpacity, Image } from "react-native";

class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../assets/images/splash2.jpg')}
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'white', height: 100, width: 100, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 26, alignItems: 'center', justifyContent: 'center' }}>UBER</Text>
                        </View>
                    </View>
                    <View>
                        <View
                            style={{
                                height: 150,
                                backgroundColor: 'white'
                            }}>
                            <View style={{
                                opacity: 1,
                                alignItems: 'flex-start',
                                paddingHorizontal: 25,
                                marginTop: 25
                            }}>
                                <Text style={{ fontSize: 24 }}>Get Moving with Uber</Text>
                            </View>

                            <TouchableOpacity>
                                <View style={{ marginTop: 25, paddingHorizontal: 25, flexDirection: 'row' }}>
                                    <Image source={require('../assets/images/india.png')}
                                        style={{ height: 24, width: 24, resizeMode: 'contain' }}></Image>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>+91</Text>
                                        <TextInput style={{flex:1,fontSize:20}} placeholder="Enter your mobile number" underlineColorAndroid="transparent"></TextInput>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View style={{
                            height: 70,
                            backgroundColor: 'white',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            borderTopColor: '#eBeBec',
                            borderWidth: 1,
                            paddingHorizontal: 25
                        }}>
                            <Text style={{ color: '#5a7fdf', fontWeight: 'bold' }}>Or connect using a social account</Text>

                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});