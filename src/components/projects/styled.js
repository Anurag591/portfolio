import styled from 'styled-components';

export const MainContainer = styled.section`
    padding: 20px;
`;

export const ProjectCard = styled.div`
    padding: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-bottom: 30px;
    border-left: 2px solid #8e06e3;
    position: relative;

    @media(max-width: 720px) {
        padding: 10px;
    }
`;

export const Data = styled.p`
    margin: 0;
    padding-top: 5px;
`;

export const ProjectTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;

export const Title = styled.span`
    margin: 0;
    font-size: 13px;
`;

export const Counter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: red;
    color: white;
    position: absolute;
    top: -11px;
    left: 6px;
`;

export const CompanyNameDiv = styled.h2`
    font-size: 15px;
    padding: 10px;

    @media(max-width: 720px) {
        font-size: 14px;
        padding: 0;
        margin-bottom: 20px;
    }
`;

export const CompanyName = styled.span`
    color: #f15858;
`;

export const ResponsibilityItem = styled.div`
    padding: 5px 15px;
`;

export const EM = styled.em`
    font-size: 11px;
    margin-top: 4px;
    margin-right: 4px;

    @media(max-width: 720px) {
        font-size: 14px;
        padding: 0;
        margin-bottom: 20px;
    }
`;
