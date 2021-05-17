import React, { Component } from 'react'
import { Text, TextInput, Button } from 'react-native'
import Estilo from '../../estilo'

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }
// setando state com constructor
//    constructor(props) {
//        super(props)
//
//        this.state = {
//            qtdeNumeros: props.qtdeNumeros
//        }
//    }

// solução do erro ao mudar o estado com constructor
//    constructor(props) {
//        super(props)
//
//        this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this)
//    }

// solução do erro ao mudar o estado com arrow function no input
//    alterarQtdeNumero(qtde) {
//        this.setState({ qtdeNumeros: qtde })
//    }

//solução do erro ao mudar o estado com arrow function na função
    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a,b) => a - b)
        this.setState({ numeros })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    render() {
        return (
            <>
                <Text style={Estilo.t0}>
                    Gerador de Mega-Sena
                </Text>
                {/*
                solução do erro de mudar o estado com arrow function na input
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Qtde de Números"
                    value={this.state.qtdeNumeros}
                    onChangeText={qtde => this.alterarQtdeNumero(qtde)}
                />*/}
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Qtde de Números"
                    value={this.state.qtdeNumeros}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />
                <Text>
                    {this.state.numeros.join(',')}
                </Text>
            </>
        )
    }
}