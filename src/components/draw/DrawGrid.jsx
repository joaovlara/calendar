import React, { useState } from 'react';
import ToggleButton from "../ToggleButton";
import { MdClose } from "react-icons/md";
import { ContainerDraw, MainH1, TextLeft, FormAdd, InputText, BtnAdd, SortArea, BtnSort, SortList, ListaMemb } from "../styles";

function DrawGrid({ toggleTheme, setPairs }) {
    const [inputValue, setInputValue] = useState('');
    const [members, setMembers] = useState([]);

    const addMember = (inputValue) => {
        if (inputValue.trim() === '') {
            return;
        }
        const newMember = {
            name: inputValue,
        };
        setMembers([...members, newMember]);
        setInputValue('');
    };

    const deleteMember = (index) => {
        const updatedMembers = [...members.slice(0, index), ...members.slice(index + 1)];
        setMembers(updatedMembers);
    };

    const sortPairs = () => {
        const shuffledMembers = [...members];
        const shuffledPairs = [];

        for (let i = shuffledMembers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledMembers[i], shuffledMembers[j]] = [shuffledMembers[j], shuffledMembers[i]];
        }

        for (let i = 0; i < shuffledMembers.length; i += 2) {
            const pair = [shuffledMembers[i], shuffledMembers[i + 1]];
            shuffledPairs.push(pair);
        }

        if (shuffledMembers.length % 2 !== 0) {
            const lastPair = [shuffledMembers[shuffledMembers.length - 1]];
            shuffledPairs.push(lastPair);
        }

        setPairs(shuffledPairs);
        console.log('Pares sorteados:', shuffledPairs);
    };

    return (
        <ContainerDraw>
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
                <BtnSort onClick={sortPairs}>Sortear</BtnSort>
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
