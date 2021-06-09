import React from 'react'
import { Button, View } from 'react-native'
import TextoCentral from './TextoCentral'

export default props => {
    return (
        <View style={{ flex:1,marginTop:30 }}>
            <View style={{ flexDirection:'row', justifyContent:"flex-end" }}>
                <Button 
                    title="Abrir"
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                            // setInterval(() => {
                            //     props.navigation.toggleDrawer()
                            // }, 1000)
                        }, 3000)
                    }}
                />
            </View>
            <View style={{ flex:1 }}>
                <TextoCentral corFundo="#33fa72" corTexto="#000">
                    Tela 4
                </TextoCentral>
            </View>
        </View>
    )
}