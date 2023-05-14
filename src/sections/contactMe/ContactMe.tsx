import React from 'react';
import {ContactItem, ContactLink, ContactList, Heading, Section} from "./styles";

function ContactMe() {
    return (
        <Section id={'contact'}>
            <Heading>Contact Information</Heading>
            <ContactList>
                <ContactItem>
                    <ContactLink href="mailto:anton.haskevych@gmail.com">Email</ContactLink>
                </ContactItem>
                <ContactItem>
                    <ContactLink href="https://www.linkedin.com/in/anton-haskevych/">LinkedIn</ContactLink>
                </ContactItem>
                <ContactItem>
                    <ContactLink href="https://github.com/AntonHaskevych">GitHub</ContactLink>
                </ContactItem>
            </ContactList>
        </Section>
    );
}

export default ContactMe;