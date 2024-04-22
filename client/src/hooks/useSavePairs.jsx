import { useState } from 'react';
import axios from 'axios';
import { findFridaysInYear } from '../components/calendar/Calendar';
import { toast } from 'react-toastify';

function useSavePairs(year) {
    const fridays = findFridaysInYear(year);
    const [duplasLimpeza, setDuplasLimpeza] = useState([]);

    // Faz a requisição das duplas já existentes no banco
    const getLimpeza = async () => {
        try {
            const res = await axios.get("http://localhost:8800/getLimpeza");
            setDuplasLimpeza(res.data);
        } catch (error) {
            console.error("Erro ao obter duplas:", error);
        }
    };

    // Salva as duplas no banco
    const saveFridayPairs = async (distributeFridayPairs) => {
        console.log("saveFridayPairs (distributeFridayPairs) :", distributeFridayPairs )
        
        try {
            await Promise.all(distributeFridayPairs.map(async (pairData) => {
                await axios.post("http://localhost:8800/saveFridayPairs", {
                    data: pairData.date,
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

    return { getLimpeza, saveFridayPairs };
}

export default useSavePairs;
