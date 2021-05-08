import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, StyleSheet } from 'react-native'
//export default são chamados como abaixo, 'Primeiro' sem chaves
import Primeiro from './componentes/primeiro'
//export sem default são chamados com chaves
//quando o export é default, não importa o nome que colocamos fora dos parenteses, como é o caso do Comp0
//quando o export é sem default, o nome deve ser igual a função do arquivo que importamos, como é o caso de Comp1 e Comp2
import Comp0, { Comp1, Comp2 } from './componentes/Multi'

import Aleatorio from './componentes/Aleatorio'

import MinMax from './componentes/MinMax'

import Titulo from './componentes/Titulo'

export default () => (
    <View style={style.App}>
        {/*<Primeiro />
        <Comp0 />
        <Comp1 />
        <Comp2 />
        <MinMax min="3" max="20"/>
        <MinMax min={3} max={20}/>
        <Aleatorio min={2} max={100} />
        <Aleatorio min={2} max={100} />
        <Aleatorio min={2} max={100} />
        <Aleatorio min={2} max={100} />*/}
        <Titulo principal="Cadastro" secundario="Tela de cadastro"/>
    </View>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center', //eixo principal
        alignItems: 'center', //eixo secundário
        padding: 20,
    },
})