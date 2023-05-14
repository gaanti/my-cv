import styled, { keyframes } from 'styled-components';

export const subtlePulse = keyframes`
  0% {
    opacity: 0.9;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.9;
  }
  `

export const HeroSection = styled.section`
  background: linear-gradient(to bottom right, #f8a5c2, #00ff7f);
  animation: ${subtlePulse} 10s ease infinite;
  color: #ffffff;
  text-align: center;
  padding: 80px 0;
  position: relative;
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const HeroSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
`;

export const HeroButton = styled.a`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px 30px;
  border-radius: 5px;
  background: #ffffff;
  color: #000000;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;


export const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.3);
`;