import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
//export default são chamados como abaixo, 'Primeiro' sem chaves
import Primeiro from './componentes/primeiro'

export default () => (
    <View>
        <Primeiro />
    </View>
)