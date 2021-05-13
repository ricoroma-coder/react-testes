import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

export default props => {
    const [nome, setNome] = useState('')
    return (
        <View>
            <Text>{nome}</Text>
            <TextInput
                placeholder="Componente controlado"
                value={nome}
                onChangeText={novo_nome => setNome(novo_nome)}
            />
            <TextInput
                placeholder="Componente não controlado"
                value={null}
            />
        </View>
    )
}