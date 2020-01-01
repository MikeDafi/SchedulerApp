import * as React from 'react';
import {
    View, Text, StyleSheet,
    TextInput
} from "react-native";

export default class RegisterScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TextInput
                    placeholder="FIRST NAME"
                    style={styles.textInput}
                    placeholderTextColor="black"
                    //onChangeText={(text) => this.setState({ email })}
                    >

                </TextInput>
                <TextInput
                    placeholder="EMAIL"
                    style={styles.textInput}
                    placeholderTextColor="black"
                    //onChangeText={(text) => this.setState({ email })}
                    >

                </TextInput>
                <TextInput
                    placeholder="PASSWORD"
                    style={styles.textInput}
                    placeholderTextColor="black"
                    //onChangeText={(text) => this.setState({ password })}
                    >

                </TextInput>
            </View>
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