import styled from 'styled-components';

export const Switch = styled.label`
    font-size: 15px;
    position: relative;
    width: 3.5em;
    height: 2em;
`;

export const InputSlider = styled.input`
     opacity: 0;
     width: 0;
     height: 0;
`;

export const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #000;
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
    background-color: #D9D9D9;
    };

    ${InputSlider}:checked + &::before {
    transform: translateX(25px);
    };

    @media (max-width: 768px) {
        height: 2em;
}
`;