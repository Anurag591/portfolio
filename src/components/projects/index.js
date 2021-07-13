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
    ResponsibilityItem,
    EM,
    CompanyDetails,
    Company,
    Header,
    Value

} from './styled';

import GyanKiBaat from '../ui/GyanKiBaat';


const Responsibility = ({ item }) => {
    return <div style={{display: 'flex', marginBottom: '4px'}}><EM className = "fab fa-accusoft" /> <small>{ item }</small> </div>
};


const Project = ({ project }) => {
    return (
        <ProjectCard>
            <Counter>{ project.index + 1 }</Counter>

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

            <CompanyDetails>
                <Company width="40%">
                    <Header>Company Name</Header>
                    <Value>{projectDetails.company_name}</Value>
                </Company>
                <Company>
                    <Header>From</Header>
                    <Value>{projectDetails.timeFrame.from}</Value>
                </Company>
                <Company>
                    <Header>To</Header>
                    <Value>{projectDetails.timeFrame.to}</Value>
                </Company>
                <Company>
                    <Header>Worked For</Header>
                    <Value>{projectDetails.timeFrame.period || '--'}</Value>
                </Company>
                <Company>
                    <Header>Place</Header>
                    <Value>{projectDetails.place}</Value>
                </Company>
            </CompanyDetails>

            {
                projectDetails.projects.map((element, index) => {
                    return <Project key={index} project = {{ ...element, index, color: projectDetails.color }} />
                })
            }
        </div>
    )

};

const Projects = () => {
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
            <GyanKiBaat />
            
            
        </MainContainer>
    );
}


export default Projects;