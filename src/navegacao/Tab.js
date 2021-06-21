import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tela1 from '../componentes/Tela1'
import Tela2 from '../componentes/Tela2'
import Tela3 from '../componentes/Tela3'

import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                    case 'TelaA':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline'
                        break;
                    case 'TelaB':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline'
                        break;
                    case 'TelaC':
                        iconName = focused
                            ? 'ios-list-box'
                            : 'ios-list'
                        break;
                }

                return <Ionicons name={iconName} size={size} color={color} />
            },
        })}
        tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
    // labelStyle: { fontSize: 30 }
    }} initialRouteName="Tela3">
        <Tab.Screen name="Tela1" component={Tela1} />
        <Tab.Screen name="Tela2" component={Tela2} />
        <Tab.Screen name="Tela3" component={Tela3} />
    </Tab.Navigator>
)