import React from 'react';
import Avatar from '../../assets/avatar.jpg';
import India from '../../assets/IndianFlag.png';
import {
    Container,
    AboutContent,
    AboutContainer,
    AboutInformation,
    ImageSection,
    AboutPrimaryHeading,
    Icon,
    List,
    Items,
    Flag
} from './styled';
import { PrimaryHeading } from '../ui/Headings';
import GyanKiBaat from '../ui/GyanKiBaat';
import {aboutMe, AboutInfo, CURRENT_DESIGNATION } from '../../constant';

const info = (props) => {
    // console.log(aboutMe);
    return (
        <React.Fragment>
            <AboutPrimaryHeading> { `${CURRENT_DESIGNATION} & Freelancer` }  </AboutPrimaryHeading>
            <List>
                {
                    AboutInfo.map(item => {
                        return (
                            <Items key={item.keyName}>
                                <Icon className="fas fa-chevron-right" ></Icon> 
                                <b>{item.keyName}:</b> &nbsp; 
                                {item.keyName === 'Phone' ? <Flag src = { India } /> : null}
                                 &nbsp;{item.value} 
                            </Items>
                        )
                    })
                }
            </List>
            <GyanKiBaat />
        </React.Fragment>
    )
}

const About = () => {
    return (
        <React.Fragment>
            <Container>
                <PrimaryHeading>About</PrimaryHeading>
                <AboutContent>{ aboutMe }</AboutContent>
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