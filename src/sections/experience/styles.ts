import styled from "styled-components";
export const ExperienceContainer = styled.div`
  padding: 50px 0;
  background-color: #f6f6f6;
`;

export const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const ExperienceTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

export const ExperienceCard = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 50px;
    width: 60%;
    align-items: flex-start;
  }
`;

export const ExperienceTitleCard = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const ExperienceDescriptionCard = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const ExperienceDateCard = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const ExperienceImage = styled.img`
  width: 40%;
  height: auto;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;