import React, { useState, useEffect } from 'react';
import ToggleButton from "./ToggleButton";
import { ContainerDraw, MainH1, TextLeft, FormAdd, InputText, BtnAdd, SortArea, BtnSort, SortList, ListaMemb } from "./styles";
import { ReactComponent as DeleteListaWhite } from '../img/icones/DeleteListaWhite.svg';

function DrawGrid({ toggleTheme }) {
    const [inputValue, setInputValue] = useState('');
    const [members, setMembers] = useState([]);

    const addMember = () => {
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

    const DrawName = () => {
        const indiceSorteado = Math.floor(Math.random() * members.length);
        const nomeSorteado = members[indiceSorteado];
        alert(`O nome sorteado é: ${nomeSorteado.name}`);
    };

    return (
        <ContainerDraw>
            <ToggleButton toggleTheme={toggleTheme} />
            <MainH1>Calendário de Limpeza</MainH1>
            <TextLeft>Insira o nome</TextLeft>
            <FormAdd onSubmit={addMember}>
                <InputText
                    placeholder='Ex. Joao'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <BtnAdd onClick={addMember}>Adicionar</BtnAdd>
            </FormAdd>
            <SortArea>
                <TextLeft>Lista de participantes</TextLeft>
                <BtnSort onClick={DrawName}>Sortear</BtnSort>
            </SortArea>
            <SortList>
                {members.map((member, index) => (
                    <ListaMemb key={index}>
                        {member.name}
                        <DeleteListaWhite onClick={() => deleteMember(index)} />
                    </ListaMemb>
                ))}
            </SortList>
        </ContainerDraw>
    );
}

export default DrawGrid;

