import styled, { keyframes } from 'styled-components';
import React from 'react';

const downloadArrow = keyframes`
    0%{ margin-top: -7px; opacity: 1; }
	0.001% { margin-top: -15px; opacity: 0; }
	50% { opacity: 1; }
	100% { margin-top: 0; opacity: 0; }
`;

const StyledButton = styled.button`
    display: inline-block;
	position: relative;
	padding: 10px 25px;
  
	background-color: #212431;
    color: white;
    border: none;
    margin: 20px 0;
    cursor: pointer;
  
	font-family: sans-serif;
	text-decoration: none;
	font-size: 0.9em;
	text-align: center;
	text-indent: 15px;

    &:after, &:before {
        content: ' ';
        display: block;
        position: absolute;
        left: 15px;
        top: 52%;
    }

    &:before {
        width: 10px;
        height: 2px;
        border-style: solid;
        border-width: 0 2px 2px;
        color: #4CC713;

    }

    &:after {
        width: 0;
        height: 0;
        margin-left: 3px;
        margin-top: -7px;
    
        border-style: solid;
        border-width: 4px 4px 0 4px;
        border-color: transparent;
        border-top-color: inherit;
        
        animation: ${downloadArrow} 2s linear infinite;
        animation-play-state: paused;

        color: #4CC713;
    }

    &:hover:after {
        animation-play-state: running;
    }

    @media(max-width: 720px) {
        &:after {
            animation-play-state: running;
        }
    }
`;

const Button = props => {
    return <StyledButton { ...props } />;
}

export default Button;
