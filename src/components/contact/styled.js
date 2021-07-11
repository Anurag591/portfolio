
import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.section`
    padding: 20px;
`;

export const FormDiv = styled.form`
    padding: 20px;
    background: white;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow: auto;
`;

export const StyledInput = styled(Field)`
    border: none;
`;