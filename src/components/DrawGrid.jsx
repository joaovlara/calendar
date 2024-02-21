import { BtnAdd, ContainerDraw, FormAdd, SortArea, SortList } from "./styles"

function DrawGrid() {
    /* const ()*/
    return (
        <ContainerDraw>
            <button>Dark Mode</button>
            <p>Calendário de Limpeza</p>
            <FormAdd>
                <p>Insira o nome</p>
                <input type="text" />
                <BtnAdd styled>Adicionar</BtnAdd>
            </FormAdd>
            <SortArea>
                <>
                    <p>Lista de participantes</p>
                    <BtnAdd>Sortear</BtnAdd>
                    <SortList>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                        <li>E</li>
                        <li>F</li>
                    </SortList>
                </>
            </SortArea>
        </ContainerDraw>
    )
}

export default DrawGrid
