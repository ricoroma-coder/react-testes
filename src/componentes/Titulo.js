import React, { Fragment } from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'

//export default props => {
//    return (
//        <Fragment>
//            <Text style={Estilo.t0}>{props.principal}</Text>
//            <Text style={Estilo.t1}>{props.secundario}</Text>
//        </Fragment>
//    )
//}

//export default props => {
//    return (
//        <View>
//            <Text style={Estilo.t0}>{props.principal}</Text>
//            <Text style={Estilo.t1}>{props.secundario}</Text>
//        </View>
//    )
//}

export default props => {
    return (
        <>
            <Text style={Estilo.t0}>{props.principal}</Text>
            <Text style={Estilo.t1}>{props.secundario}</Text>
        </>
    )
}
