import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tela1 from '../componentes/Tela1'
import Tela2 from '../componentes/Tela2'
import Tela3 from '../componentes/Tela3'
import PassoStack from '../componentes/PassoStack'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Tela1" screenOptions={{headerShown: true}}>
        <Stack.Screen name="Tela1" options={{ title: 'Informações iniciais' }}>
            {props => (
                <PassoStack {...props} avancar="Tela2">
                    <Tela1 />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="Tela2">
            {props => (
                <PassoStack {...props} avancar="Tela3" voltar>
                    <Tela2 />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="Tela3">
            {props => (
                <PassoStack {...props} avancar="Tela3" voltar>
                    <Tela3 {...props} />
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)