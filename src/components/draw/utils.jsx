import { useState } from "react";

export const addMember = (members, setMembers, inputValue, setInputValue) => {
    if (inputValue.trim() === '') {
        return;
    }
    const newMember = {
        name: inputValue,
    };
    setMembers([...members, newMember]);
    setInputValue('');
};

export const deleteMember = (members, setMembers, index) => {
    const updatedMembers = [...members.slice(0, index), ...members.slice(index + 1)];
    setMembers(updatedMembers);
};
 
export function sortPairs(members) {
    const shuffledMembers = [...members];
    const pairs = [];

    for (let i = shuffledMembers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledMembers[i], shuffledMembers[j]] = [shuffledMembers[j], shuffledMembers[i]];
    }

    for (let i = 0; i < shuffledMembers.length; i += 2) {
        const pair = [shuffledMembers[i], shuffledMembers[i + 1]];
        pairs.push(pair);
    }

    if (shuffledMembers.length % 2 !== 0) {
        const lastPair = [shuffledMembers[shuffledMembers.length - 1]];
        pairs.push(lastPair);
    }
    
    alert(`As equipes sorteadas são:\n${pairs.map((team, index) => `Equipe ${index + 1}: ${team.filter(member => member !== null).map(member => member.name).join(', ')}`).join('\n')}`);

    return pairs;
}

