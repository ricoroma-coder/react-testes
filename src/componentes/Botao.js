import React from 'react'
import { Button } from 'react-native'

export default props => {

    function executar() {
        console.warn("Executando")
    }

//    const executar = () => {
//        console.warn("Executando")
//    }

//no caso abaixo, a função só é chamada quando clicar
    return (
        <>
            <Button title="Executar" onPress={executar} />
            <Button title="Executar2" onPress={function () {
                console.warn("Executando 2")
            }} />
            <Button title="Executar3" onPress={() => console.warn("Executando 3")} />
        </>
    )

//nesse caso, a função é chamada quando o código for lido
//    return (
//        <Button title="Executar" onPress={executar()} />
//    )
}