import React from 'react'
import { Text, FlatList } from 'react-native'
import Produtos from './Produtos'

//export default props => {
//    return (
//        <>
//            <Text>Lista de produtos V2:</Text>
//            <FlatList
//                data={Produtos}
//                keyExtractor={i => `${i.id}`}
//                renderItem={({ item: p }) => {
//                   return <Text>{p.id} - {p.nome}</Text>
//                }}
//            />
//        </>
//    )
//}

export default props => {
    const produtoRender = ({ item: p }) => {
        return <Text>{p.id} - {p.nome} por apenas R${p.preco}</Text>
    }

    return (
        <>
            <Text>Lista de produtos V2:</Text>
            <FlatList
                data={Produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </>
    )
}