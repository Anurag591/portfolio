import React from 'react';

import { professionalSkills, programmingSkills, technicalSkills} from '../../constant';

import { PrimaryHeading, SecondaryHeading } from '../ui/Headings';
import {
    Container,
    NewSkillsContainer,
    Text,
    ProgressBar,
    FillBar,
    SkillContainer,
    SkillsPoints

} from './styled';
import GyanKiBaat from '../ui/GyanKiBaat';


const ProfessionalSkill = () => {
    return(
        <React.Fragment>
            <SecondaryHeading>Professional Skills</SecondaryHeading>
            {
                professionalSkills.map((element, index) => {
                    return <SkillsPoints key = { index }> <em style={{paddingRight: '10px'}} className="fab fa-accusoft"></em> { element } </SkillsPoints>
                })
            }
        </React.Fragment>
    );

}

const NewSkills = ({ data }) => {
    return (
        <NewSkillsContainer>
            <Text>{data.skillName} <sup> {data.sup} </sup> <span style = {{float: 'right'}}>{data.rating}</span> </Text>
            <ProgressBar>
                <FillBar width={data.rating} />
            </ProgressBar>
            {/* {data.index % 3 === 0 && <br />} */}
        </NewSkillsContainer>
    );
};

const AddSkillsRow = props => {
    return(
        <React.Fragment>
            <SecondaryHeading>{props.skill}</SecondaryHeading>
                <SkillContainer>
                    {
                        props.data.map((element, index) => {
                            return <NewSkills key={index} data={{...element, index: index + 1}} />
                        })
                    }
            </SkillContainer>
        </React.Fragment>
    );
}

const Skills = () => {
    return (
        <Container>
            <PrimaryHeading>Skills</PrimaryHeading>
            
            { professionalSkills.length ? <ProfessionalSkill /> : null }

            <AddSkillsRow skill = 'Programming Skills' data = { programmingSkills }  />
            <AddSkillsRow skill = 'Technical Skills' data = { technicalSkills }  />



            <GyanKiBaat />

        </Container>
    );
};

export default Skills;
