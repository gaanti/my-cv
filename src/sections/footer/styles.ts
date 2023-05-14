import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
