import styled from 'styled-components';

export const ContactContainer = styled.section`
  background-color: #fff;
  padding: 80px 0;
`;

export const ContactTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 60px;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
`;

export const ContactInput = styled.input`
  background-color: #f8f8f8;
  border: none;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  width: 90%;

  &:focus {
    outline: none;
  }
`;

interface ITextAreaProps {
    rows: number; // Define rows prop as a number
}
export const ContactTextArea = styled.textarea<ITextAreaProps>`
  background-color: #f8f8f8;
  border: none;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
  width: 90%;
  resize: none;
  row-span: 10;
  rows: ${props => props.rows};
  
  &:focus {
    outline: none;
  }
`;

export const ContactButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;
