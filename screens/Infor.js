import React from "react";
import { View, Text } from "react-native";
import style from '../component/Style/Style';

export default function Creadores(){
    return(
        <View style={style.home}>
            <Text><h1>Desenvolvedores</h1></Text>
            <Text>Kleber Jucá: 202001370161</Text>
            <Text>Kimbirley Martins: 202001239642</Text>
        </View>
    );
}