import React from 'react'
import { Text } from 'react-native'

export default function Comp() {
    return <Text>Componente #Oficial</Text>
}

//export function Comp1() {
//    return <Text>Componente #01</Text>
//}
//
//export function Comp2() {
//    return <Text>Componente #02</Text>
//}

function Comp1() {
    return <Text>Componente #01</Text>
}

function Comp2() {
    return <Text>Componente #02</Text>
}

//se tiver export na função, não é necessário colocar a linha abaixo
export { Comp1, Comp2 }