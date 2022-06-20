import React , { useState } from 'react';
import {Card} from "react-native-paper";

export function Calibra(){
    return(
        <Card>
            <Card.Title title = "Calibra"/>
            <Card.Cover source={{uri:'https://imagenspng.com/wp-content/uploads/roda-de-carro-png-Imagem-png-download-2048x2048.png'}}/>
        </Card>
    );
}
export function Pintura(){
    return(
        <Card>
            <Card.Title title = "Pintura"/>
            <Card.Cover source={{uri:'https://w7.pngwing.com/pngs/819/116/png-transparent-brown-paint-brush-on-two-white-paint-cans-illustration-paint-tin-can-brush-paint-bucket-watercolor-painting-handpainted-flowers-happy-birthday-vector-images-thumbnail.png'}}/>
        </Card>
    );
}
export function Manutencao(){
    return(
        <Card>
            <Card.Title title = "Manutencao"/>
            <Card.Cover source={{uri:'https://w7.pngwing.com/pngs/701/228/png-transparent-toolbox-graphy-toolbox-miscellaneous-hammer-wrench.png'}}/>
        </Card>
    );
}
export function Outros(){
    return(
        <Card>
            <Card.Title title = "Outros Serviços"/>
            <Card.Cover source={{uri:'https://img2.gratispng.com/20180130/wow/kisspng-car-honda-legend-sport-utility-vehicle-spare-part-automotive-engine-parts-5a7033702a2960.9713086015173026401727.jpg'}}/>
        </Card>
    );
}

