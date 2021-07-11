import styled from 'styled-components';

export const SidebarContainer = styled.section`
    height: 96vh;
    width: 18vw;
    background-color: #040B14;
    overflow: auto;
    color: white;
    padding: 2vh 30px 2vh 30px;
    position: relative;

    @media (max-width: 720px) {
        position: absolute;
        z-index: 9;
        width: 60vw;
        display: ${({ shouldVisible }) => shouldVisible ? 'block' : 'none'};
    }

`;

export const PersonalDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    width: 50%;
    border-radius: 50%;
    border: 8px solid #2C2F3F;
`;

export const Name = styled.h3`

`;

export const SocialLinkContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: ${props => props.bgColor || '#212431'};
    padding: 10px;
    border-radius: 50%;
    text-decoration: none;
    color: white;
    font-size: 13px;

    &:hover {
        background: #212431;
    }
`;

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 0px;
    margin-left: 22px;
`;

export const SidebarLink = styled.div`
    color: #6F7180;
    text-decoration: none;
    font-size: 20px;
    display: flex;
    align-items: center;
    width: fit-content;
    margin-bottom: 25px;

    &:hover {
        color: white;
    }

`;

export const Em = styled.em`
    font-size: 20px;
`;

export const Small = styled.small`
    margin-left: 20px;
`;

export const CopyRight = styled.p`
    text-align: center;
    position: absolute;
    bottom: 5px;
    font-size: 12px;
    width: calc(100% - 60px);
`;

// export const Small = styled.small`
//     margin-left: 20px;
// `;