
import styled from 'styled-components';

export const Container = styled.section`
    padding: 20px 20px 10px 20px;;
`;

export const AboutContent = styled.p`
    color: #4d4d4d;
    letter-spacing: 1px;
    font-weight: 500;
    font-size: 15px;
    text-align: justify;
    margin-bottom: 30px;
`;

export const AboutContainer = styled.div`
    display: inline-flex;
    width: 100%;

    @media(max-width: 768px) {
        display: block;
    }
`;

export const AboutInformation = styled.div`
    width: 60%;

    @media(max-width: 768px) {
        width: 100%;
    }
`;

export const ImageSection = styled.img`
    width: 20rem;

    @media(max-width: 768px) {
        width: 100%;
        margin-bottom: 15px
    }
`;

export const AboutPrimaryHeading = styled.h1`
    width: 100%;
    padding-left: 20px;
    margin-top: 0px;
    color: #173B6C;
`;

export const Icon = styled.i`
    color: rgb(62, 164, 223);
    padding: 0px 10px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const List = styled.div`
    display: inline-flex; 
    max-width: 100;
    justify-content: space-between;
    margin: 10px auto;
    flex-wrap: wrap;
    width: 100%;
`;

export const Items = styled.div`
    margin-bottom: 30px;
    display: flex;
    padding-left: 18px;
    width: 45%;
    color: #4d4d4d;

    @media(max-width: 768px) {
        width: 100%;
    }
`;

export const GyanKiBaat = styled.p`
    color: ${({ color }) => color };
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    font-family: cursive;

    @media(max-width: 720px) {
    }
`;

export const Flag = styled.img`
    width: 20px;

    @media(max-width: 720px) {
    }
`;