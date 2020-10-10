import React from 'react'
import {
    FooterContainer, 
    FooterSubHeading, 
    FooterSubscription,
    FooterSubText, 
    Form, 
    FormInput, 
    FooterLinksContainer, 
    FooterLinksWrapper,
    FooterLinksItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcon,
    SocialIconLink} from './Footer.elements'
import {Button} from '../../globalStyles'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { DiPhotoshop } from 'react-icons/di'

const Footer = () => {
    return (
        <FooterContainer>
            {/* <FooterSubscription>
                <FooterSubHeading>
                    wkwkwkwkwkwkwkwkwkwkwkwkwkwkwk
                </FooterSubHeading>
                <FooterSubText>
                    wkwkwkwkwkwkwkwwk
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                        <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription> */}
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    {/* <FooterLinksItems>
                        <FooterLinkTitle>About</FooterLinkTitle>
                        <FooterLink to='/about'>How it works</FooterLink>
                        <FooterLink to='/'>TARAK</FooterLink>
                        <FooterLink to='/'>DUNG</FooterLink>
                        <FooterLink to='/'>CESS</FooterLink>
                        <FooterLink to='/'>DUAR</FooterLink>
                    </FooterLinksItems> */}
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Needs</FooterLinkTitle>
                        <FooterLink to='/about'>Find me at</FooterLink>
                        {/* <FooterLink to='/'>TARAK</FooterLink>
                        <FooterLink to='/'>DUNG</FooterLink>
                        <FooterLink to='/'>CESS</FooterLink>
                        <FooterLink to='/'>DUAR</FooterLink> */}
                    </FooterLinksItems>
                </FooterLinksWrapper>
                {/* <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/about'>How it works</FooterLink>
                        <FooterLink to='/'>TARAK</FooterLink>
                        <FooterLink to='/'>DUNG</FooterLink>
                        <FooterLink to='/'>CESS</FooterLink>
                        <FooterLink to='/'>DUAR</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/about'>How it works</FooterLink>
                        <FooterLink to='/'>TARAK</FooterLink>
                        <FooterLink to='/'>DUNG</FooterLink>
                        <FooterLink to='/'>CESS</FooterLink>
                        <FooterLink to='/'>DUAR</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper> */}
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        UPPERSTAIRS
                    </SocialLogo>
                    <WebsiteRights>Thalibar Rifqi 2020</WebsiteRights>
                    <SocialIconLink href='https://www.facebook.com/thalibarrifqi/' target="_blank" 
                    aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='https://www.instagram.com/thalibarrifqi/' target="_blank" 
                    aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='https://twitter.com/thalibarrifqi' target="_blank" 
                    aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href='https://www.linkedin.com/in/thalibar-rifqi-a22449130/' target="_blank" 
                    aria-label="Linkedin">
                        <FaLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href='https://github.com/thalibarrifqi' target="_blank" 
                    aria-label="Github">
                        <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink href='https://vsco.co/thalibarrifqi/gallery/' target="_blank" 
                    aria-label="Photoshop">
                        <DiPhotoshop />
                    </SocialIconLink>
                </SocialMediaWrap>
            </SocialMedia>           
        </FooterContainer>
    )
}

export default Footer
