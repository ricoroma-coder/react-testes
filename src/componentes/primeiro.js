import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text } from 'react-native'

//diferentes maneiras de declarar funções
//function Tela() {
//    return <Text>Primeiro Componente</Text>
//}
const Tela = function () {
    //yellow box aparece na tela
    //console.warn('Debugando')
    return (
        <Text>Primeiro Componente</Text>
    )
}

export default Tela
//exportando a função direto
//export default function () {
//    return <Text>Primeiro Componente</Text>
//}
//arrow function
//export default () => {
//    return <Text>Primeiro Componente</Text>
//}
//simplificada
//export default () => <Text>Primeiro Componente</Text>