import React from 'react';
import {
    HeroButton,
    HeroContent,
    HeroDescription,
    HeroSection,
    HeroSubtitle,
    HeroTitle,
    Image,
    ImageWrapper
} from "./styles";

function Hero() {
    return (
        <HeroSection>
            <HeroContent>
                <ImageWrapper>
                    <Image src={'images/anton2.jpeg'} alt="Anton Haskevych"/>
                </ImageWrapper>
                <HeroTitle>Anton Haskevych</HeroTitle>
                <HeroSubtitle>Full-stack Developer</HeroSubtitle>
                <HeroDescription>I am a full-stack developer with expertise in React, NextJs, MySQL, Java, Javascript,
                    CSS, SCSS, Styled components, MUI, and Springboot. I have worked on projects like React pizza and
                    DancePro, a management platform. I have 4 months of experience as a frontend developer at Lokaleo
                    and 7 months of experience on the DancePro project.</HeroDescription>
                <HeroButton href="#contact">Get in Touch</HeroButton>
            </HeroContent>
        </HeroSection>
    );
}

export default Hero;