import styled from "styled-components";

export const Section = styled.section`
  background-color: #f9f9f9;
  padding: 80px 0;
`;

export const Heading = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 30px;
`;

export const ContactList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ContactItem = styled.li`
  margin: 0 20px;
`;

export const ContactLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 24px;

  &:hover {
    color: #0077b5;
  }
`;