import React from 'react';
import {
    Button,
    Container,
    ProjectCard,
    ProjectDescription,
    ProjectImage,
    ProjectInfo,
    ProjectsWrapper,
    ProjectTitle,
    Title
} from "./styles";

function Projects() {
    return (
        <Container>
            <Title>My Projects</Title>
            <ProjectsWrapper>
                <ProjectCard>
                    <ProjectImage src="images/react_pizza_example.jpeg" alt="React Pizza" />
                    <ProjectInfo>
                        <ProjectTitle>React Pizza</ProjectTitle>
                        <ProjectDescription>A pizza ordering application built with React.</ProjectDescription>
                        <Button href="https://github.com/gaanti/Pizza-service">View project</Button>
                    </ProjectInfo>
                </ProjectCard>
                <ProjectCard>
                    <ProjectImage src="images/dance_pro_website.jpeg" alt="DancePro" />
                    <ProjectInfo>
                        <ProjectTitle>DancePro</ProjectTitle>
                        <ProjectDescription>A management platform for dance studios.</ProjectDescription>
                    </ProjectInfo>
                </ProjectCard>
            </ProjectsWrapper>
        </Container>
    );
}

export default Projects;