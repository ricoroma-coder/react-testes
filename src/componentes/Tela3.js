import React from 'react'
import TextoCentral from './TextoCentral'

export default props => {
    return (
        <TextoCentral corFundo="#9932cd">
            Tela 3 = {props.route.params.numero}
        </TextoCentral>
    )
}