import React from 'react';
import { FormAdd, InputText, BtnAdd } from "../../styles/styles.draw";
import useMemberFunctions from './useMemberFunctions';

const Form = () => {
    const { inputValue, setInputValue, addMember } = useMemberFunctions();

    return (
        <FormAdd onSubmit={(e) => {
            e.preventDefault();
            addMember(inputValue);
        }}>
            <InputText
                placeholder='Ex. João'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        addMember(inputValue);
                    }
                }}
            />
            <BtnAdd onClick={() => addMember(inputValue)}>Adicionar</BtnAdd>
        </FormAdd>
    )
}

export default Form

