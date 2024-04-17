import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { findFridaysInYear } from '../components/calendar/Calendar';

function useSortPairs(members, year) {
    const [distributeFridayPairs, setDistributeFridayPairs] = useState([]);
    // const getLimpeza = async () => {}

    function sortPairsForFridays() {
        const fridays = findFridaysInYear(year);
        const remainingMembers = [...members];
        const sortedPairs = [];

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
            const pair = sortedPairs[index % sortedPairs.length]; // Seleciona uma dupla do array de duplas sorteadas
            console.log(`Sexta: ${friday} - Dupla: ${pair[0]} e ${pair[1]}`); // Adiciona console.log para exibir a data e a dupla sorteada
            return { date: friday, pair };
        });

        setDistributeFridayPairs(distributedPairs);

        const saveFridayPairs = async (e) => {
            try {
                await axios.post("http://localhost:8800/saveFridayPairs", distributedPairs);
                toast.info("Equipes sorteadas!!");
                console.log('Dados inseridos com sucesso no banco de dados!');
            } catch (error) {
                console.error('Erro ao inserir dados no banco de dados:', error);
            }
        }

    }


    return [distributeFridayPairs, sortPairsForFridays];



}

export default useSortPairs;
