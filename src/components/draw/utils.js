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
    const indiceSorteado = Math.floor(Math.random() * members.length);
    const nomeSorteado = members[indiceSorteado];
    alert(`O nome sorteado é: ${nomeSorteado.name}`);
};
