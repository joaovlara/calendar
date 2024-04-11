import React from 'react';
import { ToastContainer } from "react-toastify";
import ToggleButton from "../toggle-button/ToggleButton";
import { MdClose } from "react-icons/md";
import { ContainerDraw, MainH1, TextLeft, FormAdd, InputText, BtnAdd, SortArea, BtnSort, SortList, ListaMemb } from "..//../styles/styles.draw";
import useMemberFunctions from './useMemberFunctions';

function DrawGrid({ toggleTheme }) {
    const { inputValue, setInputValue, members, addMember, deleteMember } = useMemberFunctions();

    return (
        <ContainerDraw>
            <ToastContainer autoClose={3000} position="bottom-left" />
            <ToggleButton toggleTheme={toggleTheme} />
            <MainH1>Calendário de Limpeza</MainH1>
            <TextLeft>Insira o nome</TextLeft>
            <FormAdd onSubmit={(e) => {
                e.preventDefault();
                addMember(inputValue);
            }}>
                <InputText
                    placeholder='Ex. João'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            addMember(inputValue);
                        }
                    }}
                />
                <BtnAdd onClick={() => addMember(inputValue)}>Adicionar</BtnAdd>
            </FormAdd>

            <SortArea>
                <TextLeft>Lista de participantes</TextLeft>
                <BtnSort>Sortear</BtnSort>
            </SortArea>
            <SortList>
                {members.map((member, index) => (
                    <ListaMemb key={index}>
                        {member.name}
                        <MdClose onClick={() => deleteMember(index)} />
                    </ListaMemb>
                ))}
            </SortList>
        </ContainerDraw>
    );
}

export default DrawGrid;