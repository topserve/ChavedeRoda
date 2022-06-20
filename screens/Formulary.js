import * as React from 'react';
import { Text, View } from 'react-native';
import style from '../component/Style/Style';
import {Input} from 'react-native-elements';
import { Button } from 'react-native-paper';

export default function Formulary(){
  let veiculoSting = localStorage.getItem('veiculos');
  let veiculoObj = JSON.parse(veiculoSting)
  let serviceSting = localStorage.getItem('servicos');
  let serviceObj = JSON.parse(serviceSting)
  const [tipo, setTipo] = React.useState('')
  const [servico,setService] = React.useState('')
  const [modelo,setModelo] = React.useState('')
  const [nome,setNome] = React.useState('')
  const [obs,setObs] = React.useState('')
  const [valor,setValor] = React.useState('')

  const salvar = () => {
    let data = {
      tipo: tipo,
      servico: servico,
      modelo: modelo,
      nome: nome,
      obs: obs,
      valor: valor
    }
    console.log(data)
  }

    return (
      <View style={style.fund}>
        <Text><h1>DADOS</h1></Text>
        <Input placeholder="Tipo" value={veiculoObj.typo} onChangeText={value => setTipo(value)}/>
        <Input placeholder="Serviço" value={serviceObj.servico} onChangeText={value => setService(value)}/>
        <Input placeholder="Modelo" onChangeText={value => setModelo(value)}/>
        <Input placeholder="Nome do Cliente" onChangeText={value => setNome(value)}/>
        <Input placeholder="Observação" onChangeText={value => setObs(value)}/>
        <Input placeholder="Valor" onChangeText={value => setValor(value)}/>
        <Button
        title="Salvar"
        onPress={() => salvar()}>Salvar</Button>
      </View>
    );
}
