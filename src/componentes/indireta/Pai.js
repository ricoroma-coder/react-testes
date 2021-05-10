import React, { useState } from 'react'
import { Text } from 'react-native'
import Filho from './Filho'

export default props => {

    const [num, setNum] = useState(0)
    const [text, setText] = useState('')

    function exibirValor(numero, texto) {
        setNum(numero)
        setText(texto)
    }

    return (
        <>
            <Text>{text}{num}</Text>
            <Filho min={1} max={60} funcao={exibirValor} />
        </>

    )
}