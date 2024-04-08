// import React, { useState } from "react";
// import axios from "axios";
// import { TextLeft, SortArea, BtnSort, SortList, ListaMemb } from "./styles.draw";
// import { MdClose } from "react-icons/md";
// import { toast } from "react-toastify";
// import useMemberFunctions from './useMemberFunctions';

// const Grid = () => {
//     const { members } = useMemberFunctions();

//     return (
//         <div>
//             <SortArea>
//                 <TextLeft>Lista de participantes</TextLeft>
//                 <BtnSort >Sortear</BtnSort>
//             </SortArea>
//             <SortList>
//                 {members.map((member, index) => (
//                     <ListaMemb key={index}>
//                         {member.name}
//                         <MdClose />
//                     </ListaMemb>
//                 ))}
//             </SortList>
//         </div>
//     );
// };

// export default Grid;
