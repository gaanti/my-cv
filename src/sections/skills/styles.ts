import styled, { keyframes } from 'styled-components';

export const SkillSection = styled.section`
                     background-color: #f6f6f6;
color: #333333;
text-align: center;
padding: 80px 0;
`;

export const SkillContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const SkillTitle = styled.h2`
                   font-size: 2.5rem;
font-weight: bold;
margin-bottom: 40px;
`;

export const SkillList = styled.ul`
                  display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 40px;
list-style: none;
padding: 0;
margin: 0;
`;

export const SkillItem = styled.li`
                  background-color: #ffffff;
border-radius: 5px;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
padding: 20px;
text-align: center;
`;

export const SkillName = styled.h3`
                  font-size: 1.8rem;
font-weight: bold;
margin-bottom: 20px;
`;

export const SkillDescription = styled.p`
                         font-size: 1.2rem;
margin-bottom: 20px;
`;
