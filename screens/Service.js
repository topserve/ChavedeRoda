import * as React from 'react';
import { View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Calibra, Manutencao, Pintura, Outros } from './Servic';
import style from '../component/Style/Style';
import { StatusBar } from 'expo-status-bar';


export default function Service({ navigation }) {
    const [serviço, setService] = React.useState('')

    function onService(){
        let servicos = {
            servico: serviço
        }
        localStorage.setItem('servicos',JSON.stringify(servicos));
        navigation.navigate('Formulary')
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
                    <Col style={style.mario} onPress={()=>onService(setService('Calibra'))}><Calibra /></Col>
                    <Col style={style.mario} onPress={()=>onService(setService('Pintura'))}><Pintura /></Col>
                </Row>
                <Row>
                    <Col style={style.mario} onPress={()=>onService(setService('Manutencao'))}><Manutencao /></Col>
                    <Col style={style.mario} onPress={()=>onService(setService('Outro'))}><Outros /></Col>
                </Row>
            </Grid>
            
        </View>
    );
}