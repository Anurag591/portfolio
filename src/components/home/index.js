import React from 'react';

import { name, PROFILE } from '../../constant';
import Video from '../../assets/video.mp4'

import TypewriterComponent from 'typewriter-effect';

import { 
    BackgroundVideo,
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
                <BackgroundVideo muted loop autoPlay src={Video} type='video/mp4' />
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