import React, { useState } from 'react';
import ToggleButton from "../ToggleButton";
import { MdClose } from "react-icons/md";
import { ContainerDraw, MainH1, TextLeft, FormAdd, InputText, BtnAdd, SortArea, BtnSort, SortList, ListaMemb } from "../styles";
import { addMember, deleteMember, drawName } from "./utils.js";

function DrawGrid({ toggleTheme }) {
    const [inputValue, setInputValue] = useState('');
    const [members, setMembers] = useState([]);

    return (
        <ContainerDraw>
            <ToggleButton toggleTheme={toggleTheme} />
            <MainH1>Calendário de Limpeza</MainH1>
            <TextLeft>Insira o nome</TextLeft>
            <FormAdd onSubmit={(e) => {
                e.preventDefault();
                addMember(members, setMembers, inputValue, setInputValue);
            }}>
                <InputText
                    placeholder='Ex. Joao'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            addMember(members, setMembers, inputValue, setInputValue);
                        }
                    }}
                />
                <BtnAdd onClick={() => addMember(members, setMembers, inputValue, setInputValue)}>Adicionar</BtnAdd>
            </FormAdd>

            <SortArea>
                <TextLeft>Lista de participantes</TextLeft>
                <BtnSort onClick={() => drawName(members)}>Sortear</BtnSort>
            </SortArea>
            <SortList>
                {members.map((member, index) => (
                    <ListaMemb key={index}>
                        {member.name}
                        <MdClose onClick={() => deleteMember(members, setMembers, index)} />
                    </ListaMemb>
                ))}
            </SortList>
        </ContainerDraw>
    );
}

export default DrawGrid;
