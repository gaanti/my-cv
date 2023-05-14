import React, {useEffect} from 'react';
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
    useEffect(() => {
        let url = window.location.href.split("/");
        let target = url[url.length - 1].toLowerCase();
        let element = document.getElementById(target);
        element && element.scrollIntoView({ behavior: "smooth", block: "start"});
    }, []);
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
                <HeroButton href="/"
                            onClick={e => {
                                let contact = document.getElementById("contactYou");
                                e.preventDefault();
                                contact &&
                                contact.scrollIntoView({ behavior: "smooth", block: "start" });
                                window.history.pushState("contactYou", "contactYou", "/contactYou");
                            }}
                >Get in Touch</HeroButton>
            </HeroContent>
        </HeroSection>
    );
}

export default Hero;