import React from 'react'
import { btnAdd } from './styles.js'

export const DrawGrid = () => {
    return (
        <>
            <button>Dark Mode</button>
            <form>
                <h1>Calendário de Limpeza</h1>
                <label htmlFor="">Insira o nome</label>
                <input type="text" />
                <btnAdd styled>Adicionar</btnAdd>
            </form>
            <div>
                <p>Lista de participantes</p>
                <button>Sortear</button>
                <ul>
                    <li>Fulano</li>
                    <li>Joaozinho</li>
                    <li>Carlos Alberto</li>
                    <li>Pedrinho</li>
                    <li>Ciclano</li>
                    <li>Ronaldo</li>
                </ul>
            </div>
        </>
    )
}

export default DrawGrid
