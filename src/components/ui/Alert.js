import styled from 'styled-components';
import React from 'react';

const StyledButton = styled.div`
    background: ${props => props.background};
`;

const Input = props => {
    return <StyledButton { ...props } />;
}

export default Input;
