import React, { useState } from 'react';
import ToggleButton from "../ToggleButton";
import { MdClose } from "react-icons/md";
import { ContainerDraw, MainH1, TextLeft, FormAdd, InputText, BtnAdd, SortArea, BtnSort, SortList, ListaMemb } from "../styles";
import { addMember, deleteMember } from "./utils.js";
import Calendar from '../calendar/Calendar.jsx';

function DrawGrid({ toggleTheme }) {
    const [inputValue, setInputValue] = useState('');
    const [members, setMembers] = useState([]);
    const [teams, setTeams] = useState([]);

    const generateDuplas = () => {
        const tempArray = [...members];
                for (let i = tempArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
        }
        const duplas = [];
        for (let i = 0; i < tempArray.length; i += 2) {
            const dupla = [tempArray[i], i + 1 < tempArray.length ? tempArray[i + 1] : null];
            duplas.push(dupla);
        }
    
        setTeams(duplas);
    
        alert(`As equipes sorteadas são:\n${duplas.map((team, index) => `Equipe ${index + 1}: ${team.filter(member => member !== null).map(member => member.name).join(', ')}`).join('\n')}`);
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
                <BtnSort onClick={generateDuplas}>Sortear</BtnSort>
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
