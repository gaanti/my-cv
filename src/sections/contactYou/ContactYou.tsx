import React from 'react';
import {ContactButton, ContactContainer, ContactForm, ContactInput, ContactTextArea, ContactTitle} from "./styles";

function ContactYou() {
    return (
        <ContactContainer id={'contactYou'}>
            <ContactTitle>Contact Me</ContactTitle>
            <ContactForm>
                <ContactInput type="text" placeholder="Name" required />
                <ContactInput type="email" placeholder="Email" required />
                <ContactTextArea rows={5} placeholder="Message" required />
                <ContactButton type="submit">Send Message</ContactButton>
            </ContactForm>
        </ContactContainer>
    );
}

export default ContactYou;