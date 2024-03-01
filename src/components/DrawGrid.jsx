import { BtnAdd, BtnSort, ContainerDraw, InputText, MainH1, SortArea, SortList, TextLeft, FormAdd } from "./styles"
import ToggleButton from "./ToggleButton"

function DrawGrid() {
    /* const ()*/
    return (
        <ContainerDraw>
            <ToggleButton />
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
                <li>Exemplo</li>
                <li>Exemplo</li>
                <li>Exemplo</li>
                <li>Exemplo</li>
                <li>Exemplo</li>
                <li>Exemplo</li>
            </SortList>
        </ContainerDraw>
    )
}

export default DrawGrid
