import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

//export default (props) => {
//    const { min, max } = props
//    const delta =  (max - min) + 1
//    const numero = parseInt(Math.random() * delta) + min
//    return (
//        <Text style={Estilo.t0}>Número gerado: {numero}</Text>
//    )
//}

export default ({ min, max }) => {
    const delta =  (max - min) + 1
    let numero = parseInt(Math.random() * delta) + min
    //setTimeout(() => numero = parseInt(Math.random() * delta) + min, 2000)
    return (
        <Text style={Estilo.t0}>Número gerado: {numero}</Text>
    )
}