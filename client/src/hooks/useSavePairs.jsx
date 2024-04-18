import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function useSavePairs() {
    const { distributedPairs } = useSortPairs();

    const fetchLimpeza = async () => {
        try {
            const res = await axios.get("http://localhost:8800/getLimpeza");
        } catch (error) {
            console.error("Erro ao obter dados de limpeza:", error);
        }
    };

    useEffect(() => {
        fetchLimpeza();
    }, []);

    const saveFridayPairs = async (data, funcionario1_id, funcionario2_id) => {
        try {
            await axios.post("http://localhost:8800/saveFridayPairs", {
                data: data,
                funcionario1_id: funcionario1_id,
                funcionario2_id: funcionario2_id
            });
            toast.info("Equipes sorteadas!!");
        } catch (error) {
            console.error('Erro ao inserir dados no banco de dados:', error);
        }
    };

    return saveFridayPairs;
}

export default useSavePairs;
