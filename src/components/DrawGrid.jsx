import React, { useState, useEffect } from 'react';
import ToggleButton from "./ToggleButton";
import { ContainerDraw, MainH1, TextLeft, FormAdd, InputText, BtnAdd, SortArea, BtnSort, SortList, ListaMemb, SvgIcon } from "./styles";
import { ReactComponent as DeleteListaWhite } from '../img/icones/DeleteListaWhite.svg';

function DrawGrid({ toggleTheme }) {
    const [inputValue, setInputValue] = useState('');
    const [name, setMembers] = useState([]);

    const addMember = () => {
        if (inputValue.trim() === '') {
            return;
        }
        const newMember = {
            member: inputValue,
        };
        setMembers([...name, newMember]);
        setInputValue('');
    };

    const deleteMember = (index) => {
        const updatedMembers = [...name.slice(0, index), ...name.slice(index + 1)];
        setMembers(updatedMembers);
    };

    const sortearNome = () => {
        const indiceSorteado = Math.floor(Math.random() * name.length);
        const nomeSorteado = name[indiceSorteado];
        alert(`O nome sorteado é: ${nomeSorteado.member}`);
    };

    return (
        <ContainerDraw>
            <ToggleButton toggleTheme={toggleTheme} />
            <MainH1>Calendário de Limpeza</MainH1>
            <TextLeft>Insira o nome</TextLeft>
            <FormAdd onSubmit={addMember}>
                <InputText
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <BtnAdd onClick={addMember}>Adicionar</BtnAdd>
            </FormAdd>
            <SortArea>
                <TextLeft>Lista de participantes</TextLeft>
                <BtnSort onClick={sortearNome}>Sortear</BtnSort>
            </SortArea>
            <SortList>
                {name.map((member, index) => (
                    <ListaMemb key={index}>
                        {member.member}
                        <DeleteListaWhite onClick={() => deleteMember(index)} />
                    </ListaMemb>
                ))}
            </SortList>
        </ContainerDraw>
    );
}

export default DrawGrid;