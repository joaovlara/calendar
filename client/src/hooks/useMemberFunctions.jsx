import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function useMemberFunctions() {
    const [inputValue, setInputValue] = useState('');
    const [members, setMembers] = useState([]);

    useEffect(() => {
        getFuncionario();
    }, []); // Chamada apenas na montagem do componente

    const getFuncionario = async () => {
        try {
            const res = await axios.get("http://192.168.18.32:8800/");
            setMembers(res.data);
            for (let i = 0; i < res.data.length; i++) {
                // console.log(`res.data[${i}].id dentro do useMember: `, res.data[i].id);
            }
        } catch (error) {
            console.error("Erro ao obter funcionários:", error);
            toast.error("Erro ao obter funcionários");
        }
    };

    const addMember = async (e) => {
        e.preventDefault();

        if (inputValue.trim() === "") {
            return toast.warn("Por favor, insira um nome");
        }

        try {
            await axios.post("http://192.168.18.32:8800/", { nome: inputValue });
            setInputValue("");
            toast.success("Funcionário adicionado com sucesso");
            getFuncionario(); // Atualiza a lista de membros após adicionar um novo membro
        } catch (error) {
            toast.error("Erro ao adicionar funcionário");
            console.error("Erro ao adicionar funcionário:", error);
        }
    };

    const deleteMember = async (id) => {
        try {
            await axios.delete(`http://192.168.18.32:8800/${id}`);
            const updatedMembers = members.filter(member => member.id !== id);
            setMembers(updatedMembers);
            toast.success("Funcionário excluído com sucesso.");

        } catch (error) {
            toast.error("Erro ao excluir funcionário.");
            console.error("Erro ao excluir funcionário:", error);
        }
    };

    return { inputValue, setInputValue, members, addMember, deleteMember };
}

export default useMemberFunctions;
