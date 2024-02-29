import React from 'react';
import styled, { css } from 'styled-components';

export function ToggleButton() {
    return (
        <DarkModeBtn>
            <Switch>
                <InputSlider type="checkbox" />
                <Slider class="slider"></Slider>
            </Switch>
        </DarkModeBtn>
    )
}

/*Style for Toggle Button */

const DarkModeBtn = styled.div`

`;
const Switch = styled.label`
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
`;

const InputSlider = styled.input.attrs({ type: 'checkbox' })`
  &:checked {
    background-color: red;
  }
`;


const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: #D9D9D9;
    border-radius: 50px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:before {
        position: absolute;
        content: "";
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2em;
        width: 2em;
        inset: 0;
        background-color: #B73625;
        border-radius: 50px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.4);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
`;


export default ToggleButton;
