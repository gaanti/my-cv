import React from 'react';
import {FooterLinks, Link, StyledFooter} from "./styles";

function Footer() {
    return (
        <StyledFooter>
            <div>
                © 2023 Anton Haskevych | All rights reserved
            </div>
            <FooterLinks>
                <Link href="https://github.com/gaanti">Github</Link>
                <Link href="https://www.linkedin.com/in/antongaskevich">LinkedIn</Link>
                <Link href="mailto:haskevych48@icloud.com">Email</Link>
            </FooterLinks>
        </StyledFooter>
    );
}

export default Footer;