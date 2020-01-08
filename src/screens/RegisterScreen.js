import * as React from 'react';
import {
    View, Text, StyleSheet,
    TextInput
} from "react-native";
import { Field, reduxForm } from 'redux-form';
import InputText from "./InputText";
import { TouchableOpacity } from 'react-native-gesture-handler';


class RegisterScreen extends React.Component {

    creteNewUser = () => {
        alert("boom new USER")
    }

    onSubmit = (values) => {
        console.log(values);
    }

    renderTextInput = (field) => {
        const { meta: { touched, error }, label, secureTextEntry, maxLength, keyboardType, placeholder, input: { onChange, ...restInput } } = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    label={label}
                    {...restInput} />
                {touched && error && <Text>{error}</Text>}
            </View>
        )
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Field
                    name="firstName"
                    placeholder="First Name"
                    component={this.renderTextInput} />
                <Field
                    name="email"
                    placeholder="Email"
                    component={this.renderTextInput} />
                <Field
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    component={this.renderTextInput} />
                <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >REGISTER</Text>
                </TouchableOpacity>
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
    },
    button: {
        backgroundColor: 'white',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2

    }
})

const validate = (values) => {
    const errors = {};
    if(!values.name){
        errors.name = "Name is required"
    }

    if(!values.email){
        errors.email = "Email is required"
    }

    if(!values.password){
        errors.password = "Password is required"
    }
    return errors;
}

export default reduxForm({
    //a unique name for the form
    form: 'register',
    validate:validate
})(RegisterScreen)