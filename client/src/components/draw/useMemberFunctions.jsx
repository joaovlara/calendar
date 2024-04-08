import { useState, useEffect } from 'react';

function useMemberFunctions() {
    const [inputValue, setInputValue] = useState('');
    const [members, setMembers] = useState(() => {
        const storedMembers = JSON.parse(localStorage.getItem('members')) || [];
        return storedMembers;
    });

    const addMember = (inputValue) => {
        if (inputValue.trim() === '') {
            return;
        }
        const newMember = {
            name: inputValue,
        };
        setMembers([...members, newMember]);
        setInputValue('');
    };

    const deleteMember = (index) => {
        const updatedMembers = [...members.slice(0, index), ...members.slice(index + 1)];
        setMembers(updatedMembers);
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

    return { inputValue, setInputValue, members, addMember, deleteMember, sortPairs };
}

export default useMemberFunctions;
