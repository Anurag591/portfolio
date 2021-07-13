import styled from 'styled-components';

import { GYAN_KI_BAAT } from '../../constant';

const GyanKiBaat = styled.p`
    color: ${ GYAN_KI_BAAT.color };
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    font-family: cursive;

    @media(max-width: 720px) {
    }
`;

const Gyan = () => {
    return <GyanKiBaat > { GYAN_KI_BAAT.text } <em className={ GYAN_KI_BAAT.logo }></em> </GyanKiBaat>
};

export default Gyan;