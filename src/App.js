import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
//export default são chamados como abaixo, 'Primeiro' sem chaves
import Primeiro from './componentes/primeiro'
//export sem default são chamados com chaves
//quando o export é default, não importa o nome que colocamos fora dos parenteses, como é o caso do Comp0
//quando o export é sem default, o nome deve ser igual a função do arquivo que importamos, como é o caso de Comp1 e Comp2
import Comp0, { Comp1, Comp2 } from './componentes/Multi'

import Aleatorio from './componentes/Aleatorio'

import MinMax from './componentes/MinMax'

import Titulo from './componentes/Titulo'

import Botao from './componentes/Botao'

import Contador from './componentes/Contador'

import Pai from './componentes/direta/Pai'
import Pai2 from './componentes/indireta/Pai'

import ContadorV2 from './componentes/contador2/ContadorV2'

import Diferenciar from './componentes/Diferenciar'

import ParImpar from './componentes/ParImpar'

import Familia from './componentes/relacao/Pai'
import Membro from './componentes/relacao/Filho'

import UsuarioLogado from './componentes/UsuarioLogado'

import ListaProdutos from './componentes/produtos/ListaProdutos'
import ListaProdutosV2 from './componentes/produtos/ListaProdutosV2'

import InputName from './componentes/InputName'

import FlexboxV1 from './componentes/layout/FlexboxV1'
import FlexboxV2 from './componentes/layout/FlexboxV2'
import FlexboxV3 from './componentes/layout/FlexboxV3'
import FlexboxV4 from './componentes/layout/FlexboxV4'

import Mega from './componentes/mega/Mega'

import TextoCentral from './componentes/TextoCentral'
import Tela1 from './componentes/Tela1'
import Tela2 from './componentes/Tela2'
import Tela3 from './componentes/Tela3'
import Navegacao from './navegacao'

export default () => (
    <SafeAreaView style={{flex:1}}>
        <Navegacao />
        {/*<Tela1 />
        <Tela2 />
        <Tela3 />
        <Primeiro />
        <Comp0 />
        <Comp1 />
        <Comp2 />
        <MinMax min="3" max="20"/>
        <MinMax min={3} max={20}/>
        <Aleatorio min={2} max={100} />
        <Aleatorio min={2} max={100} />
        <Aleatorio min={2} max={100} />
        <Aleatorio min={2} max={100} />
        <Titulo principal="Cadastro" secundario="Tela de cadastro"/>
        <Botao />
        <Contador inicial={100} passo={13} />
        <Pai2 />
        <ContadorV2 />
        <Diferenciar />
        <ParImpar num={3} />
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda" />
            <Membro nome="Carlos" sobrenome="Arruda" />
        </Familia>

        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
        </Familia>
        <UsuarioLogado usuario={{nome:'Gui',email:'gui@gui.com'}} />
        <UsuarioLogado usuario={{nome:'Carlos'}} />
        <UsuarioLogado usuario={{email:'ana@ana.com'}} />
        <UsuarioLogado usuario={null} />
        <UsuarioLogado />
        <ListaProdutos />
        <ListaProdutosV2 />
        <InputName />
        <FlexboxV1 />
        <FlexboxV2 />
        <FlexboxV3 />
        <FlexboxV4 />
        <Mega qtdeNumeros={7} />*/}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center', //eixo principal
        alignItems: 'center', //eixo secundário
        padding: 20,
    },
})