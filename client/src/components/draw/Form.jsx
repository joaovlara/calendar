import React from 'react';
import { FormAdd, InputText, BtnAdd } from "..//../styles/styles.draw";
import useMemberFunctions from "../../hooks/useMemberFunctions"

function Form() {
    const { inputValue, setInputValue, addMember } = useMemberFunctions();

    return (
        <FormAdd onSubmit={(e) => {
            e.preventDefault();
            addMember(e);
        }}>
            <InputText
                placeholder='Ex. João'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') { addMember(e); }
                }} />
            <BtnAdd type="submit">Adicionar</BtnAdd>
        </FormAdd>
    );
}

export default Form;
