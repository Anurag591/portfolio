import styled from 'styled-components';
import React from 'react';

const StyledInput = styled.input`
    width: 100%;

    &:focus{
        background: red;
    }
`;

const Input = props => {
    return <StyledInput { ...props } />;
}

export default Input;
