import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Tela1 from '../componentes/Tela1'
import Tela2 from '../componentes/Tela2'
import Tela3 from '../componentes/Tela3'

const Drawer = createDrawerNavigator()

export default props => (
    <Drawer.Navigator initialRouteName="Tela3">
        <Drawer.Screen name="Tela1" component={Tela1} />
        <Drawer.Screen name="Tela2" component={Tela2} />
        <Drawer.Screen name="Tela3" component={Tela3} />
    </Drawer.Navigator>
)