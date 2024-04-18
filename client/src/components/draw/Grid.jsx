import React, { useState } from 'react';
import { MdClose } from "react-icons/md";
import { Grid, TextLeft, SortArea, BtnSort, SortList, ListaMemb } from "..//../styles/styles.draw";
import useMemberFunctions from "../../hooks/useMemberFunctions";
import useSavePairs from '../../hooks/useSavePairs'; // Importe useSavePairs

function GridList() {
    const { members, deleteMember } = useMemberFunctions();
    const [sortClicked, setSortClicked] = useState(false);
    const saveFridayPairs = useSavePairs(); // Use useSavePairs para obter a função saveFridayPairs

    const handleSortPairs = () => {
        // Não é necessário chamar sortPairsForFridays aqui, pois useSortPairs já retorna a função sortPairsForFridays
        saveFridayPairs(members, new Date().getFullYear()); // Chame saveFridayPairs com os argumentos necessários
        setSortClicked(true);
    };

    return (
        <Grid>
            <SortArea>
                <TextLeft>Lista de participantes</TextLeft>
                <BtnSort onClick={handleSortPairs}>Sortear</BtnSort>
            </SortArea>
            <SortList>
                {members.map((member) => (
                    <ListaMemb key={member.nome}>
                        {member.nome} <MdClose onClick={() => deleteMember(member.id)} />
                    </ListaMemb>
                ))}
            </SortList>
        </Grid>
    );
}

export default GridList;
