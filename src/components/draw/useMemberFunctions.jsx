import React, { useState, useEffect } from 'react';

export function useMemberFunctions() {
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

    const sortPairs = () => {
        const shuffledMembers = [...members];
        
        // Se a quantidade de membros for ímpar, duplicar o último membro
        if (shuffledMembers.length % 2 !== 0) {
            const lastMember = shuffledMembers[shuffledMembers.length - 1];
            shuffledMembers.push({ ...lastMember });
        }
        
        // Embaralhar os membros
        for (let i = shuffledMembers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledMembers[i], shuffledMembers[j]] = [shuffledMembers[j], shuffledMembers[i]];
        }

        // Formar pares de membros consecutivos
        const shuffledPairs = [];
        for (let i = 0; i < shuffledMembers.length; i += 2) {
            const pair = [shuffledMembers[i], shuffledMembers[i + 1]];
            shuffledPairs.push(pair);
        }

        console.log('Pares sorteados:');
        shuffledPairs.forEach(pair => {
            if (pair.length === 2) {
                console.log(`${pair[0].name} e ${pair[1].name}`);
            } else {
                console.log(`${pair[0].name}`);
            }
        });

        return shuffledPairs;
    };
    
    // Atualiza o localStorage sempre que houver mudanças na lista de membros
    useEffect(() => {
        localStorage.setItem('members', JSON.stringify(members));
    }, [members]);

    return { inputValue, setInputValue, members, addMember, deleteMember, sortPairs };
}
