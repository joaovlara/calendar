import React from 'react';
import { MdClose } from "react-icons/md";
import { Grid, TextLeft, SortArea, BtnSort, SortList, ListaMemb } from "../../styles/styles.draw";
import useMemberFunctions from './useMemberFunctions';

const GridConteiner = ( setPairs ) => {
    const { members, deleteMember, sortPairs } = useMemberFunctions();
    return (
        <Grid>
            <SortArea>
                <TextLeft>Lista de participantes</TextLeft>
                <BtnSort onClick={() => sortPairs(setPairs)}>Sortear</BtnSort>
            </SortArea>
            <SortList>
                {members.map((member, index) => (
                    <ListaMemb key={index}>
                        {member.name}
                        <MdClose onClick={() => deleteMember(index)} />
                    </ListaMemb>
                ))}
            </SortList>
        </Grid>
    )
}

export default GridConteiner;



