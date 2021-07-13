import styled from 'styled-components';

export const MainContainer = styled.section`
    padding: 20px;
`;

export const ProjectCard = styled.div`
    padding: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 8px 24px 0px;
    margin-bottom: 30px;
    border-left: 2px solid #1666c2;
    position: relative;

    @media(max-width: 720px) {
        padding: 20px 10px;
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
    width: 15px;
    height: 15px;
    background: #1666c2;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 10px;
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


export const CompanyDetails = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    background: #222b352e;
    margin-bottom: 20px;
    border-radius: 15px 15px 0px 0px;
    box-shadow: 3px 5px 8px #c1c0c0;

    @media(max-width: 720px) {
        display: block;
    }
`;

export const Company = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: ${({ width }) => width || 'auto'};

    @media(max-width: 720px) {
        display: block;
        margin-bottom: 10px;
        width: 100%;
    }
`;

export const Header = styled.div`
    color: #0e0101c7;
    font-weight: 700;
    margin-bottom: 3px;
`;

export const Value = styled.div`
    font-weight: bold;
    letter-spacing: 0.5px;
    color: #1666c2;
`;