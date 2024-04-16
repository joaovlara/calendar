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
            setMembers(res.data);
        }
        catch (error) {
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

    return { inputValue, setInputValue, members, addMember, deleteMember, getFuncionario };
}

export default useMemberFunctions;