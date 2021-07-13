import React from 'react';

import { skillsInfo, programmingSkills, technicalSkills} from '../../constant';

import { PrimaryHeading, SecondaryHeading } from '../ui/Headings';
import {
    Container,
    Article,
    NewSkillsContainer,
    Text,
    ProgressBar,
    FillBar,
    SkillContainer,
    SkillsPoints

} from './styled';

const skillsInformation = () => {
    return skillsInfo.map(element => {
        return <SkillsPoints key={element.key}>{element.key === '0' ? <b> {element.value} </b> : element.value}</SkillsPoints>
    })

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

const addSkillsRow = props => {
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
            <Article> { skillsInformation() } </Article>

            { addSkillsRow({skill: 'Programming Skills', data: programmingSkills}) }
            { addSkillsRow({skill: 'Technical Skills', data: technicalSkills}) }

        </Container>
    );
};

export default Skills;
