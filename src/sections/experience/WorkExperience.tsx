import React from 'react';
import {
    ExperienceCard,
    ExperienceContainer,
    ExperienceContent,
    ExperienceDateCard,
    ExperienceDescriptionCard,
    ExperienceImage,
    ExperienceTitle,
    ExperienceTitleCard,
    ExperienceWrapper
} from "./styles";

function WorkExperience() {
    return (
        <ExperienceContainer>
            <ExperienceWrapper>
                <ExperienceTitle>Work Experience</ExperienceTitle>
                <ExperienceCard>
                    <ExperienceContent>
                        <ExperienceTitleCard>Full-stack Developer</ExperienceTitleCard>
                        <ExperienceDescriptionCard>
                            Worked on the "DancePro" project, a management platform for dance
                            schools.
                        </ExperienceDescriptionCard>
                        <ExperienceDateCard>
                            February 2022 - Present
                        </ExperienceDateCard>
                    </ExperienceContent>
                    <ExperienceImage
                        src="images/dance_pro_logo.svg"
                        alt="DancePro project screenshot"
                    />
                </ExperienceCard>
                <ExperienceCard>
                    <ExperienceImage
                        src="images/lokaleo_logo.svg"
                        alt="Lokaleo company logo"
                    />
                    <ExperienceContent>
                        <ExperienceTitleCard>Frontend Developer</ExperienceTitleCard>
                        <ExperienceDescriptionCard>
                            Worked for Lokaleo, a German company providing a platform for local
                            businesses to create and manage online stores.
                        </ExperienceDescriptionCard>
                        <ExperienceDateCard>September 2021 - January 2022</ExperienceDateCard>
                    </ExperienceContent>
                </ExperienceCard>
            </ExperienceWrapper>
        </ExperienceContainer>
    );
}

export default WorkExperience;