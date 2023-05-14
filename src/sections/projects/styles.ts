import styled from 'styled-components';

export const Container = styled.section`
  background-color: #f6f6f6;
  padding: 50px 0;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

export const ProjectCard = styled.div`
  background-color: #ffffff;
  width: 300px;
  margin: 0 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const ProjectInfo = styled.div`
  padding: 20px;
`;

export const ProjectTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ProjectDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Button = styled.a`
  display: inline-block;
  background-color: #00ff7f;
  color: #000;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #19d375;
  }
`;