import React from 'react';
import Avatar from '../../assets/avatar.jpg';
import {
    Container,
    AboutContent,
    AboutContainer,
    AboutInformation,
    ImageSection,
    AboutPrimaryHeading,
    Icon,
    List,
    Items
} from './styled';
import { PrimaryHeading } from '../ui/Headings';
import {aboutMe, AboutInfo} from '../../constant';

const info = (props) => {
    return (
        <React.Fragment>
            <AboutPrimaryHeading> UI/UX and Full Stack Developer </AboutPrimaryHeading>
            <AboutContent style={{padding: '0px 20px', fontStyle: 'italic'}}>{aboutMe}</AboutContent>
            <List>
                {
                    AboutInfo.map(item => {
                        return (
                            <Items key={item.keyName}> <Icon className="fas fa-chevron-right" ></Icon> <b>{item.keyName}:</b> &nbsp;&nbsp;{item.value}</Items>
                        )
                    })
                }
            </List>
            <AboutContent style={{padding: '0px 20px', marginBottom: '0px'}}>{aboutMe}</AboutContent>
        </React.Fragment>
    )
}

const About = () => {
    return (
        <React.Fragment>
            <Container>
                <PrimaryHeading>About</PrimaryHeading>
                <AboutContent>{aboutMe} {aboutMe} {aboutMe}</AboutContent>
                <AboutContainer>
                    <ImageSection src={Avatar}></ImageSection>
                    <AboutInformation>
                        {
                            info()
                        }
                    </AboutInformation>
                </AboutContainer>
            </Container>
        </React.Fragment>
    )
}

export default About;