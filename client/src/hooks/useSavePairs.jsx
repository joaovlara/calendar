import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { findFridaysInYear } from '../components/calendar/Calendar';
import useSortPairs from './useSortPairs';

function useSavePairs(year, index) {
    const fridays = findFridaysInYear(year);
    const friday = fridays[index % fridays.length];
    const { sortedPairs } = useSortPairs();
    // const pair = sortedPairs[index % sortedPairs.length];

    const saveFridayPairs = async (data, funcionario1_id, funcionario2_id) => {
        try {
            // Verifica se os dados estão definidos
            if (!data || !funcionario1_id || !funcionario2_id) {
                console.error('Dados ausentes para salvar pares de sexta-feira.');
                return;
            }
            await axios.post("http://localhost:8800/saveFridayPairs", {
                data,
                funcionario1_id,
                funcionario2_id
            });

            toast.info("Equipes sorteadas!!");
            console.log(`Sexta: ${data} - Dupla: ${funcionario1_id} e ${funcionario2_id}`);
        } catch (error) {
            console.error('Erro ao inserir dados no banco de dados:', error);
        }
    };

    return saveFridayPairs;
}

export default useSavePairs;
