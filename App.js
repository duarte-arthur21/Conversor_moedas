import { Image, Text, View } from 'react-native';

import { estilo } from './Estilo';
import {ConverteValor} from './Componentes';

export default function App() {

  return (
    <View style={estilo.container}>

      <View style={estilo.container1}>      
      <ConverteValor/>
      </View>
    </View>
  );
}