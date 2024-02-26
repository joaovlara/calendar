import { BtnAdd, BtnSort, ContainerDraw, InputText, MainH1, SortArea, SortList, TextLeft, FormAdd } from "./styles"

function DrawGrid() {
    /* const ()*/
    return (
        <ContainerDraw>
            <p>Dark Mode</p>
            <MainH1>Calendário de Limpeza</MainH1>

            <TextLeft>Insira o nome</TextLeft>

            <FormAdd>
                <InputText type="text" />
                <BtnAdd styled>Adicionar</BtnAdd>
            </FormAdd>


            <SortArea>
                <TextLeft>Lista de participantes</TextLeft>
                <BtnSort>Sortear</BtnSort>
            </SortArea>
            <SortList>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
                <li>F</li>
            </SortList>
        </ContainerDraw>
    )
}

export default DrawGrid