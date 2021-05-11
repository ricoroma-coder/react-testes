import React from 'react'
import { Text } from 'react-native'
import Produtos from './Produtos'

//export default props => {
//    return (
//        <>
//            <Text>Lista de produtos:</Text>
//            {Produtos.map(p => {
//                return <Text key={p.id}>{p.id} - {p.nome} por apenas R${p.preco}</Text>
//            })}
//        </>
//    )
//}

export default props => {
    function lista() {
        return Produtos.map((p, i) => {
            return <Text key={i}>{p.id} - {p.nome} por apenas R${p.preco}</Text>
        })
    }
    return (
        <>
            <Text>Lista de produtos:</Text>
            {lista()}
        </>
    )
}