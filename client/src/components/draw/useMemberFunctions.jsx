import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function useMemberFunctions() {
    const [inputValue, setInputValue] = useState('');
    const [members, setMembers] = useState([]);

    const fetchFuncionario = async () => {
        try {
            const res = await axios.get("http://localhost:8800/");
            setMembers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
        } catch (error) {
            toast.error("Erro ao obter funcionários");
            console.error("Erro ao obter funcionários:", error);
        }
    };

    useEffect(() => {
        fetchFuncionario();
    }, []);

    const addMember = async (name) => {
        if (name.trim() === "") {
            toast.warn("Por favor, insira um nome");
            return;
        }
        try {
            await axios.post("http://localhost:8800/", { nome: name });
            toast.success("Funcionário adicionado com sucesso");
            fetchFuncionario(); // Atualiza a lista após adicionar
        } catch (error) {
            toast.error("Erro ao adicionar funcionário");
            console.error("Erro ao adicionar funcionário:", error);
        }
    };

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

    return { inputValue, setInputValue, members, addMember, deleteMember, fetchFuncionario };
}

export default useMemberFunctions;
