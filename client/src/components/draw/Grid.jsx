import React, { useState } from 'react';
import { MdClose } from "react-icons/md";
import { Grid, TextLeft, SortArea, BtnSort, SortList, ListaMemb } from "..//../styles/styles.draw";
import useSortPairs from '../../hooks/useSortPairs'; // Importe o hook useSortPairs
import useMemberFunctions from "../../hooks/useMemberFunctions";

function GridList() {
    const { members, deleteMember } = useMemberFunctions();
    const [sortClicked, setSortClicked] = useState(false);
    const [distributeFridayPairs, sortPairsForFridays] = useSortPairs(members, new Date().getFullYear());

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
                    <ListaMemb key={member.nome}>
                        {member.nome} <MdClose onClick={() => deleteMember(member.id)} />
                    </ListaMemb>
                ))}
            </SortList>
        </Grid>
    );
}

export default GridList;
