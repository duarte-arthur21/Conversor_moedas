import React, { useState } from 'react'
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native'
import {estilo} from './Estilo'

export function ConverteValor(){
  const [msg, setMsg] = useState('')
  const [num, setNum] = useState('')
  const [resultado, setResultado] = useState('')

  function dolarReal(){
    const conv = num * 0.191998
    setResultado(conv)

      setMsg(" R$ Dolares ")
    }

  function euroReal(){
    const conv = num * 0.176613
    setResultado(conv)

      setMsg(" € Euros")
  }

  function yuanReal(){
    const conv = num * 1.30191
    setResultado(conv)

      setMsg(" ¥ Yuans")
  } 

  return(
    <View >
      <Text style={estilo.titulo}>Informe um Valor em Real:</Text>
            <TextInput
            style={estilo.textInput}
            defaultValue={num}
            placeholder="0,00 R$"
            onChangeText={num => setNum(parseFloat(num))}
            />

       <Text style={estilo.titulo}>Agora converta o valor</Text>
            <TouchableOpacity onPress={()=> dolarReal()}>
            <Image style={estilo.flag} source={require('./imagens/flag-us.png')}/>
                <Text style={estilo.calcular}>
                  Dolar EUA</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> euroReal()}>
            <Image style={estilo.flag} source={require('./imagens/flag-european.png')}/>
                <Text style={estilo.calcular}>
                  EURO</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> yuanReal()}>
              <Image style={estilo.flag} source={require('./imagens/flag-china.png')}/>
                <Text style={estilo.calcular}>
                  Yuan</Text>
            </TouchableOpacity>

            <Text style={estilo.resultado}>{Math.round(resultado).toFixed(2)}{msg}</Text>
    </View>
);
}
