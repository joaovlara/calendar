import * as React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

export const Frame = styled.div`
    border: solid 1px;
    width: 100%;
    height: 70%;
`;

export const Header = styled.div`
    background-color: #B73625;
    font-size: 18px;
    padding: 1%;
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.div`
  cursor: pointer;
`;

export const Body = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    `;

export const DayWeek = styled.p`
    background-color: red;
    width: 14.2%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

`

export const Day = styled.p`
    height: 14,2%;
    width: 14.2%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

  ${props =>
        props.isToday &&
        css`
      border: 1px solid #eee;
    `}

  ${props =>
        props.isSelected &&
        css`
      background-color: #eee;
    `}
`;