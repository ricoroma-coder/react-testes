import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tela1 from '../componentes/Tela1'
import Tela2 from '../componentes/Tela2'
import Tela3 from '../componentes/Tela3'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        labelStyle: { fontSize: 30 }
    }} initialRouteName="Tela3">
        <Tab.Screen name="Tela1" component={Tela1} />
        <Tab.Screen name="Tela2" component={Tela2} />
        <Tab.Screen name="Tela3" component={Tela3} />
    </Tab.Navigator>
)