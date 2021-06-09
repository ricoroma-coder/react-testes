import React from 'react'
import TextoCentral from './TextoCentral'

export default props => {
    const numero = props.route && props.route.params && props.route.params.numero ? props.route.params.numero : 0
    return (
        <TextoCentral corFundo="#9932cd">
            Tela 3 = {numero}
        </TextoCentral>
    )
}