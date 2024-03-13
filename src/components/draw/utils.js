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

export const drawName = (members) => {
    const sortedMembers = [];
    const membersSorteados = 2;

    for (let i = 0; i < membersSorteados; i++) {
        let indiceSorteado;

        do {
            indiceSorteado = Math.floor(Math.random() * members.length);
        } while (sortedMembers.includes(members[indiceSorteado]));

        sortedMembers.push(members[indiceSorteado]);
    }

    const nomesSorteados = sortedMembers.map(member => member.name);
    alert(`Os membros sorteados são: ${nomesSorteados.join(' e ')}`);
};
