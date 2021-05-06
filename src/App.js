import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
//export default são chamados como abaixo, 'Primeiro' sem chaves
import Primeiro from './componentes/primeiro'
//export sem default são chamados com chaves
//quando o export é default, não importa o nome que colocamos fora dos parenteses, como é o caso do Comp0
//quando o export é sem default, o nome deve ser igual a função do arquivo que importamos, como é o caso de Comp1 e Comp2
import Comp0, { Comp1, Comp2 } from './componentes/Multi'

export default () => (
    <View>
        <Primeiro />
        <Comp0 />
        <Comp1 />
        <Comp2 />
    </View>
)