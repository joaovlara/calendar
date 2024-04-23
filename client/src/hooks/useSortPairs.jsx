import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { findFridaysInYear } from '../components/calendar/Calendar';

function useSortPairs(members, year) {
    const [distributeFridayPairs, setDistributeFridayPairs] = useState([]);

    async function saveFridayPairs(distributedPairs) {
        try {
            await Promise.all(distributedPairs.map(async (pairData) => {
                const date = new Date(pairData.date).toISOString().split('T')[0];
                await axios.post("http://localhost:8800/saveFridayPairs", {
                    data: date,
                    funcionario1: pairData.pair[0],
                    funcionario2: pairData.pair[1],
                });
            }));
    
            toast.success("Duplas sorteadas com sucesso!");
        } catch (error) {
            toast.error("Erro ao salvar duplas sorteadas");
            console.error("Erro ao salvar duplas sorteadas:", error);
        }
    }

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
            console.log("DATA DA SEXTA-friday: ", friday, "DUPLAS pair -> ", pair)
            return { date: friday, pair };
        });

        setDistributeFridayPairs(distributedPairs);

        // Salva as duplas no banco
        saveFridayPairs(distributedPairs);
    }

    return [distributeFridayPairs, sortPairsForFridays];
}

export default useSortPairs;
