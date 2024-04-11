import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function useMemberFunctions() {
    const [inputValue, setInputValue] = useState('');
    const [members, setMembers] = useState([]);
    const getFuncionario = async () => {
        try {
            const res = await axios.get("http://localhost:8800/");
            setMembers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
        } catch (error) {
            toast.error("Erro ao obter funcionários");
            console.error("Erro ao obter funcionários:", error);
        }
    };

    useEffect(() => {
        getFuncionario();
    }, []);

    const addMember = async (e) => {
        e.preventDefault();

        if (inputValue.trim() === "") {
            return toast.warn("Por favor, insira um nome");
        }

        try {
            await axios.post("http://localhost:8800/", { nome: inputValue });
            setInputValue("");
            toast.success("Funcionário adicionado com sucesso");
        } catch (error) {
            toast.error("Erro ao adicionar funcionário");
            console.error("Erro ao adicionar funcionário:", error);
        }
    };

    getFuncionario(); // Atualiza a lista de membros após adicionar um novo membro

    const deleteMember = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/${id}`);
            const updatedMembers = members.filter(member => member.id !== id);
            setMembers(updatedMembers);
            toast.success("Funcionário excluído com sucesso.");
        } catch (error) {
            toast.error("Erro ao excluir funcionário.");
            console.error("Erro ao excluir funcionário:", error);
        }
    };
    const sortPairs = (setPairs) => {
        const originalMembers = [...members];
        const shuffledMembers = [...members];

        // Se a quantidade de membros for ímpar, duplicar um membro aleatório
        if (shuffledMembers.length % 2 !== 0) {
            const randomIndex = Math.floor(Math.random() * shuffledMembers.length);
            const randomMember = shuffledMembers[randomIndex];
            const duplicateMember = { ...randomMember };  // Duplicar o membro aleatório
            shuffledMembers.push(duplicateMember);
        }
        // Embaralhar os membros
        for (let i = shuffledMembers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledMembers[i], shuffledMembers[j]] = [shuffledMembers[j], shuffledMembers[i]];
        }
        // Inicializa um array para armazenar os pares sorteados
        const shuffledPairs = [];
        for (let i = 0; i < shuffledMembers.length; i += 2) {
            const pair = [shuffledMembers[i], shuffledMembers[i + 1]];
            shuffledPairs.push(pair);
        }

        setPairs(shuffledPairs);

    };
    return { inputValue, setInputValue, members, addMember, deleteMember, getFuncionario };
}

export default useMemberFunctions;
