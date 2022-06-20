import * as React from 'react';
import { View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Carro, Moto, Caminhao, Outros } from './Home';
import style from '../component/Style/Style';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native-paper';

export default function Inicio({ navigation }, typo) {
    const [veiculo, setVeiculo] = React.useState()

    const formulario = () =>{
        const veiculos = {
            typo: veiculo
        }
        localStorage.setItem('veiculos',JSON.stringify(veiculos));
        navigation.navigate('Serviços')
    };
    const onInfor = ()=> {
        navigation.navigate('Dev')
    }
    return (
        <View style={style.fund}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor='#ffff'
                translucent={false}
                networkActivityIndicatorVisible={true}
            />
            <Grid style={style.fund}>
                <Row>
                    <Col onPress={()=>formulario(setVeiculo('Carro'))} style={style.mario} ><Carro onSubmit/></Col>
                    <Col onPress={()=>formulario(setVeiculo('Moto'))} style={style.mario}><Moto /></Col>
                </Row>
                <Row>
                    <Col onPress={()=>formulario(setVeiculo('Caminhao'))} style={style.mario} ><Caminhao /></Col>
                    <Col onPress={()=>formulario(setVeiculo('Outro'))}style={style.mario} ><Outros /></Col>
                </Row>
            </Grid>
            <Button onPress={() => onInfor()}>Desenvolvedores</Button>
        </View>
    );
}