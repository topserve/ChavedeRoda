import React , { useState } from 'react';
import {Card} from "react-native-paper";

export function Carro(){
    return(
        <Card>
            <Card.Title title = "Carro"/>
            <Card.Cover source={{uri:'https://i.pinimg.com/originals/85/ff/9b/85ff9b4b9d27cb9209e8854390bbb9b3.jpg'}}/>
        </Card>
    );
}
export function Moto(){
    return(
        <Card>
            <Card.Title title = "Moto"/>
            <Card.Cover source={{uri:'https://img2.gratispng.com/20180628/zcr/kisspng-honda-cg125-motorcycle-honda-cg-150-honda-xre300-honda-cg-5b35acf1472d72.6407301415302443372916.jpg'}}/>
        </Card>
    );
}
export function Caminhao(){
    return(
        <Card>
            <Card.Title title = "Caminhão"/>
            <Card.Cover source={{uri:'https://www.byd.com.br/wp-content/uploads/2021/10/et7-1024x684.png'}}/>
        </Card>
    );
}
export function Outros(){
    return(
        <Card>
            <Card.Title title = "Outros"/>
            <Card.Cover source={{uri:'https://w7.pngwing.com/pngs/601/509/png-transparent-velomotors-quadracycle-stels-atv-all-terrain-vehicle-price-atv-scooter-car-motorcycle-thumbnail.png'}}/>
        </Card>
    );
}

