import React from 'react';
import { ToastContainer } from "react-toastify";
import ToggleButton from "../toggle-button/ToggleButton";
import { MdClose } from "react-icons/md";
import { ContainerDraw, MainH1, TextLeft, FormAdd, InputText, BtnAdd, SortArea, BtnSort, SortList, ListaMemb } from "..//../styles/styles.draw";
import useMemberFunctions from '../hooks/useMemberFunctions';
import useSortPairs from '../hooks/useSortPairs';

function DrawGrid({ toggleTheme, setPairs }) {
    const { inputValue, setInputValue, members, addMember, deleteMember } = useMemberFunctions();
    const sortPairs = useSortPairs();

    return (
        <ContainerDraw>
            <ToastContainer autoClose={3000} position="bottom-left" />
            <ToggleButton toggleTheme={toggleTheme} />
            <MainH1>Calendário de Limpeza</MainH1>
            <TextLeft>Insira o nome</TextLeft>
            <FormAdd onSubmit={(e) => {
                e.preventDefault();
                addMember(e);
            }}>
                <InputText
                    placeholder='Ex. João'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            addMember(e);
                        }
                    }}
                />
                <BtnAdd type="submit">Adicionar</BtnAdd>
            </FormAdd>

            <SortArea>
                <TextLeft>Lista de participantes</TextLeft>
                <BtnSort onClick={() => sortPairs(members, setPairs)}>Sortear</BtnSort>
            </SortArea>
            <SortList>
                {members.map((member) => (
                    <ListaMemb key={member.nome}>
                        {member.nome}
                        <MdClose onClick={() => deleteMember(member.id)} />
                    </ListaMemb>
                ))}
            </SortList>
        </ContainerDraw>
    );
}

export default DrawGrid;
