import React from 'react';
import styled from 'styled-components';

export function ToggleButton() {
    return (
        <Switch>
            <InputSlider />
            <Slider />
        </Switch>
    )
};

/*Style for Toggle Button */

const Switch = styled.label`
    font-size: 15px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
`;
const InputSlider = styled.input.attrs({ type: 'checkbox' })`
     opacity: 0;
     width: 0;
     height: 0;
`;
const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #D9D9D9;
    border-radius: 50px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:before {
        position: absolute;
        content: "";
        height: 2em;
        width: 2em;
        inset: 0;
        background: #B73625;
        border-radius: 50px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.4);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    };

    ${InputSlider}:checked + & {
    background-color: #000;
    };

    ${InputSlider}:checked + &::before {
    transform: translateX(25px);
    };
`;

export default ToggleButton;
