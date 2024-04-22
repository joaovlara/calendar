import React, { useState } from 'react';
import { MdClose } from "react-icons/md";
import { Grid, TextLeft, SortArea, BtnSort, SortList, ListaMemb } from "..//../styles/styles.draw";
import useMemberFunctions from "../../hooks/useMemberFunctions";
import useSortPairs from '../../hooks/useSortPairs';

function GridList() {

    const year = new Date().getFullYear(); 
    const { members, deleteMember } = useMemberFunctions();
    const [distributeFridayPairs, sortPairsForFridays] = useSortPairs(members, new Date().getFullYear());
    const [sortClicked, setSortClicked] = useState(false);

    const handleSortPairs = () => {
        sortPairsForFridays();
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
                    <ListaMemb key={member.id}>
                        {member.nome} <MdClose onClick={() => deleteMember(member.id)} />
                    </ListaMemb>
                ))}
            </SortList>
        </Grid>
    );
}

export default GridList;
