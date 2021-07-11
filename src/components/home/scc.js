import styled  from "styled-components";
import BgImage from '../../assets/home-bg.jpg';

export const BackgroundDiv = styled.section`
    display: flex;
    align-items: center;
    background-image: url(${BgImage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 100vh;
`;
export const NameSection = styled.div`
    margin-left: 12%;
`;
export const Name = styled.h1`
    color: white;
    font-size: 50px;
    font-weight: 600;
    letter-spacing: 2px;
    margin-bottom: 0;

    @media(max-width: 720px) {
        font-size: 35px;
    }
`;

export const Blinker = styled.div`
    color: white;
    margin-top: 0;
    font-size: 25px;
    font-weight: 500;
    display: flex;
`;


export const ImageSection = styled.div`
    
`;

