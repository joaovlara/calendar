import { BtnAdd, ContainerDraw, FormAdd } from "./styles"

function DrawGrid() {
    /* const ()*/
    return (
        <ContainerDraw>
            <button>Dark Mode</button>
            <h1>Calendário de Limpeza</h1>
            <FormAdd>
                <label htmlFor="">Insira o nome</label>
                <input type="text" />
                <BtnAdd styled>Adicionar</BtnAdd>
            </FormAdd>
            <div>
                <p>Lista de participantes</p>
                <BtnAdd>Sortear</BtnAdd>
                <ul>
                    <li>Fulano</li>
                    <li>Joaozinho</li>
                    <li>Carlos Alberto</li>
                    <li>Pedrinho</li>
                    <li>Ciclano</li>
                    <li>Ronaldo</li>
                </ul>
            </div>
        </ContainerDraw>
    )
}

export default DrawGrid
