import React, { useState } from 'react';
import ToggleButton from "../ToggleButton";
import { MdClose } from "react-icons/md";
import { ContainerDraw, MainH1, TextLeft, FormAdd, InputText, BtnAdd, SortArea, BtnSort, SortList, ListaMemb } from "../styles";
import { addMember, deleteMember } from "./utils.js";

function DrawGrid({ toggleTheme, numTeams }) {
    const [inputValue, setInputValue] = useState('');
    const [members, setMembers] = useState([]);
    const [teams, setTeams] = useState([]);

    const generateTeams = () => {
        const tempArray = [...members];

        const duplas = [];
        for (let i = 0; i < tempArray.length; i += 2) {
            duplas.push([tempArray[i], tempArray[i + 1]]);
        }

        setTeams(duplas);

        alert(`As equipes sorteadas são:\n${duplas.map((team, index) => `Equipe ${index + 1}: ${team.map(member => member.name).join(', ')}`).join('\n')}`);
    };

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
                    placeholder='Ex. João'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            addMember(members, setMembers, inputValue, setInputValue);
                            setInputValue('');
                        }
                    }}
                />
                <BtnAdd onClick={() => {
                    addMember(members, setMembers, inputValue, setInputValue);
                    setInputValue('');
                }}>Adicionar</BtnAdd>
            </FormAdd>

            <SortArea>
                <TextLeft>Lista de participantes</TextLeft>
                <BtnSort onClick={generateTeams}>Sortear</BtnSort>
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
