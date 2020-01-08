import PropTypes from "prop-types";
import React, {Component} from "react";
import {TextInput,Text,View,StyleSheet} from "react-native";
import { Input } from "native-base";

const propTypes={
    mapElement:PropTypes.func,
    onSubmitEditing:PropTypes.func,
    onChangeText:PropTypes.func,
    value:PropTypes.string,
    placeholder:PropTypes.string,
    maxLength:PropTypes.number,
    keyboardType:PropTypes.string,
    secureTextEntry: PropTypes.bool,
    label:PropTypes.string
}

const defaultProps = {
    mapElement: (n) =>{},
    onSubmitEditing: () =>{},
    onChangeText:() =>{},
    value: "",
    placeholder:"",
    maxLength:200,
    keyboardType:"default",
    secureTextEntry:false,
    label:""
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

class InputText extends React.Component {
    render(){
        const {placeholder,secureTextEntry,keyboardType,maxLength,value,onChangeText,onSubmitEditing} = this.props;
    
        return(
            <View>
                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholder={placeholder}
                    placeholderTextColor="black"
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                    returnKeyType="next"
                    value={value}
                    onSubmitEditing={onSubmitEditing}
                    onChangeText={onChangeText}
                />
            </View>
        );
    }
}

InputText.defaultProps = defaultProps;

InputText.propTypes = propTypes;

export default InputText;