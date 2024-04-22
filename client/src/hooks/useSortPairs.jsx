import { useState } from 'react';
import { findFridaysInYear } from '../components/calendar/Calendar';

function useSortPairs(members, year) {
    const [distributeFridayPairs, setDistributeFridayPairs] = useState([]);

    function sortPairsForFridays() {
        const fridays = findFridaysInYear(year);
        const remainingMembers = [...members];
        const sortedPairs = [];
        console.log("PARES SORTEADOS sortedPairs: ", sortedPairs)

        // Sorteio das duplas
        while (remainingMembers.length > 1) {
            const randomIndex1 = Math.floor(Math.random() * remainingMembers.length);
            const member1 = remainingMembers[randomIndex1];
            remainingMembers.splice(randomIndex1, 1);

            const randomIndex2 = Math.floor(Math.random() * remainingMembers.length);
            const member2 = remainingMembers[randomIndex2];
            remainingMembers.splice(randomIndex2, 1);

            sortedPairs.push([member1.nome, member2.nome]);       
        }

        // Distribuição das duplas para sextas-feiras
        const distributedPairs = fridays.map((friday, index) => {
            const pair = sortedPairs[index % sortedPairs.length];
            // console.log( "DATA DA SEXTA-friday: ", friday, "DUPLAS pair -> ",  pair)
            // console.log(`Sexta: ${friday} - Dupla: ${pair[0]} e ${pair[1]}`);
            return { date: friday, pair };
        });

        setDistributeFridayPairs(distributedPairs);
    }

    return [distributeFridayPairs, sortPairsForFridays];
}

export default useSortPairs;
