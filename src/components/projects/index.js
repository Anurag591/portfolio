import React from 'react';

import { PROJECT_LIST } from '../../constant';
import { PrimaryHeading } from '../ui/Headings';

import {
    MainContainer,
    ProjectCard,
    ProjectTitle,
    Title,
    Counter,
    Data,
    CompanyName,
    CompanyNameDiv,
    ResponsibilityItem,
    EM

} from './styled';

const Responsibility = ({ item }) => {
    return <div style={{display: 'flex', marginBottom: '4px'}}><EM className = "fab fa-accusoft" /> <small>{ item }</small> </div>
};


const Project = ({ project }) => {
    console.log(project);
    return (
        <ProjectCard>
            <Counter>{ project.index + 1 }</Counter>
            <ProjectTitle>
                <Title> <Data>{ project.duration }</Data> </Title>
                <Title> <Data>{ project.place }</Data> </Title>
            </ProjectTitle>

            <ProjectTitle>
                <Title> <b> Project Title: </b> <Data>{ project.title }</Data> </Title>
                <Title> <Data>{ project.designation }</Data> </Title>
            </ProjectTitle>

            <ProjectTitle>
                <Title> <b> Description: </b> <Data>{ project.description }</Data> </Title>
            </ProjectTitle>

            <Title> <b>Responsibility:</b> </Title>
            <ResponsibilityItem>
                {
                    project.responsibility.map(element => {
                        return <Responsibility key={element} item = { element } />
                    })
                }
            </ResponsibilityItem>

        </ProjectCard>
    )
};

const ProjectList = ( { projectDetails } ) => {

    return (
        <div>
            <CompanyNameDiv>
                <b>Company Name: </b> 
                <CompanyName> {projectDetails.company_name} </CompanyName>
            </CompanyNameDiv>
            {
                projectDetails.projects.map((element, index) => {
                    return <Project key={index} project = {{ ...element, index }} />
                })
            }
        </div>
    )

};

const Projects = (props) => {
    return (
        <MainContainer>
            <PrimaryHeading>Projects</PrimaryHeading>

            <div>
                {
                    PROJECT_LIST.map((element, index) => {
                        return <ProjectList projectDetails = { element } key = { index } />
                    })
                }
            </div>
        </MainContainer>
    );
}


export default Projects;