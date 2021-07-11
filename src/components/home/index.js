import React from 'react';

import { name, PROFILE } from '../../constant';

import TypewriterComponent from 'typewriter-effect';

import { 
    BackgroundDiv,
    NameSection,
    ImageSection,
    Name,
    Blinker,

} from './scc';

const TypeWriter = () => {
    return (
        <TypewriterComponent
        options = {
            {
                strings: PROFILE,
                loop: true,
                autoStart: true,
                wrapperClassName: 'blinker'
            }
        }>

        </TypewriterComponent>
    );
};

const Home = () => {
    return (
        <BackgroundDiv>
            <NameSection>
                <Name>{name}</Name>
                <Blinker>I'm &nbsp;
                    {TypeWriter()}
                </Blinker>
            </NameSection>

            <ImageSection />

        </BackgroundDiv>
    )
}

export default Home;