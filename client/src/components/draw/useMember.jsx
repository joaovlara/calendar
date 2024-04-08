import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

function useMemberFunctions({ onEdit }) {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const member = ref.current;
      member.name.value = onEdit.name;
    }
  }, [onEdit]);

  const [inputValue, setInputValue] = useState('');
  const [members, setMembers] = useState([]);

  const deleteMember = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/${id}`);
      const newArray = members.filter((member) => member.id !== id);
      setMembers(newArray);
      toast.success("Usuário excluído com sucesso.");
    } catch (error) {
      toast.error("Erro ao excluir o usuário.");
    }
  };

  const addMember = async (e) => {
    e.preventDefault();

    const member = ref.current;

    if (!member.name.value) {
      return toast.warn("Preencha todos os campos!");
    }

    try {
      if (onEdit) {
        await axios.put(`http://localhost:8800/${onEdit.id}`, {
          name: member.name.value,
        });
      } else {
        await axios.post("http://localhost:8800", {
          name: member.name.value,
        });
      }
      toast.success("Membro adicionado/editado com sucesso.");
      member.name.value = "";
    } catch (error) {
      toast.error("Erro ao adicionar/editar membro.");
    }
  };

  useEffect(() => {
    console.log('Lista de membros atualizada:');
    members.forEach((member, index) => {
      console.log(`${index + 1}. ${member.name}`);
    });
  }, [members]);

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

    console.log('Pares sorteados:');
    shuffledPairs.forEach(pair => {
      if (pair.length === 2) {
        console.log(`${pair[0].name} e ${pair[1].name}`);
      } else {
        console.log(`${pair[0].name}`);
      }
    });
  };

  return { inputValue, setInputValue, members, addMember, deleteMember };
}

export default useMemberFunctions;
