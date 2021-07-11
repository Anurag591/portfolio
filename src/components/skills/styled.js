import styled from "styled-components";


export const Container = styled.section`
    padding: 20px;
`;

export const Article = styled.p`
    color: #4d4d4d;
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 15px;
    text-align: justify;
`;

export const SkillContainer = styled.div`
    display: inline-flex; 
    max-width: 100;
    justify-content: space-between;
    margin: 10px auto;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 40px;
`;

export const Text = styled.small`
    padding: 0;
    margin: 0 0 6px 0;
    text-transform: uppercase;
    display: block;
    font-weight: 600;
    font-family: sans-serif;
    color: #050d18;
    letter-spacing: 1px;
`;

export const ProgressBar = styled.div`
    width: 100%;
    background: #DCE8F8;
    height: 10px;
    position: relative;
`;

export const FillBar = styled.div`
    width: ${props => props.width};
    height: 10px;
    background: #149ddd;
    position: absolute;
    top: 0;
    left: 0;
`;

export const NewSkillsContainer = styled.div`
    width: 30%;
    margin-top: 25px;

    @media(max-width: 720px) {
        width: 46%;
    }

    @media(max-width: 420px) {
        width: 100%;
    }
`;
