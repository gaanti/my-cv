import React from 'react';
import {ContactItem, ContactLink, ContactList, Heading, Section} from "./styles";

function ContactMe() {
    return (
        <Section id={'contact'}>
            <Heading>Contact Information</Heading>
            <ContactList>
                <ContactItem>
                    <ContactLink href="mailto:haskevych48@icloud.com">Email</ContactLink>
                </ContactItem>
                <ContactItem>
                    <ContactLink href="https://www.linkedin.com/in/antongaskevich">LinkedIn</ContactLink>
                </ContactItem>
                <ContactItem>
                    <ContactLink href="https://github.com/gaanti">GitHub</ContactLink>
                </ContactItem>
            </ContactList>
        </Section>
    );
}

export default ContactMe;