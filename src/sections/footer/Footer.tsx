import React from 'react';
import {FooterLinks, Link, StyledFooter} from "./styles";

function Footer() {
    return (
        <StyledFooter>
            <div>
                © 2023 Anton Haskevych | All rights reserved
            </div>
            <FooterLinks>
                <Link href="https://github.com/antongorodezkiy">Github</Link>
                <Link href="https://www.linkedin.com/in/anton-haskevych-200111207/">LinkedIn</Link>
                <Link href="mailto:antongorodezkiy@gmail.com">Email</Link>
            </FooterLinks>
        </StyledFooter>
    );
}

export default Footer;