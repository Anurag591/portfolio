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
    GyanKiBaat,
    Flag
} from './styled';
import { PrimaryHeading } from '../ui/Headings';
import {aboutMe, AboutInfo, CURRENT_DESIGNATION, GYAN_KI_BAAT } from '../../constant';

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
            <GyanKiBaat color = { GYAN_KI_BAAT.color }> { GYAN_KI_BAAT.text } <em className={ GYAN_KI_BAAT.logo }></em> </GyanKiBaat>
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