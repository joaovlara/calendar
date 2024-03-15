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
 
