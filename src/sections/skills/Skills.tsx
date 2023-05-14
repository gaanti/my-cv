import React from 'react';
import {SkillContent, SkillDescription, SkillItem, SkillList, SkillName, SkillSection, SkillTitle} from "./styles";

function Skills() {
    return (
        <SkillSection>
            <SkillContent>
                <SkillTitle>My Skills</SkillTitle>
                <SkillList>
                    <SkillItem>
                        <SkillName>React</SkillName>
                        <SkillDescription>I have experience building complex user interfaces using React and Redux.</SkillDescription>
                    </SkillItem>
                    <SkillItem>
                        <SkillName>Next.js</SkillName>
                        <SkillDescription>I am proficient in building server-side rendered React applications using Next.js.</SkillDescription>
                    </SkillItem>
                    <SkillItem>
                        <SkillName>MySQL</SkillName>
                        <SkillDescription>I am comfortable working with relational databases, including MySQL and PostgreSQL.</SkillDescription>
                    </SkillItem>
                    <SkillItem>
                        <SkillName>Java</SkillName>
                        <SkillDescription>I have experience building enterprise-grade applications using Java and Spring Boot.</SkillDescription>
                    </SkillItem>
                    <SkillItem>
                        <SkillName>JavaScript</SkillName>
                        <SkillDescription>I am fluent in JavaScript and have experience working with various frameworks and libraries.</SkillDescription>
                    </SkillItem>
                    <SkillItem>
                        <SkillName>CSS/SCSS</SkillName>
                        <SkillDescription>I am proficient in writing CSS and have experience working with CSS preprocessors like SCSS.</SkillDescription>
                    </SkillItem>
                    <SkillItem>
                        <SkillName>AWS</SkillName>
                        <SkillDescription>I have experience with Amazon Web Services (AWS), including EC2, S3, and Lambda.</SkillDescription>
                    </SkillItem>
                    <SkillItem>
                        <SkillName>Styled Components</SkillName>
                        <SkillDescription>I have experience using Styled Components to style React components in a modular and maintainable way.</SkillDescription>
                    </SkillItem>
                    <SkillItem>
                        <SkillName>Material-UI</SkillName>
                        <SkillDescription>I am familiar with the Material-UI library and have used it in several projects.</SkillDescription>
                    </SkillItem>
                </SkillList>
            </SkillContent>
        </SkillSection>    );
}

export default Skills;