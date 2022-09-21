import styled from "styled-components";

export const Footer = styled.footer`
    color: #fff;
    padding: 0;
    margin: 0;
    width: 100%;
    display: grid;
    grid-template-rows: 80px auto;
    font-family: 'Inter', sans-serif;
`
export const FooterTop = styled.div`
    display: grid;
    background-color: #0B062B;
    height: 80px;
    grid-template-columns: 1fr auto;
`
export const FooterTopDiv = styled.div`
    align-self: center;
`
export const SocialDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`
export const SocialA = styled.a`
    align-self: center;
`
export const SocialImg = styled.img`
    width: 24px;
    height: 24px;
    display: inline-block;
    margin-right: 15px;
`
export const FooterMain = styled.div`
    background-color: #1E1E1E;
    display: grid;
    width: 100%;
    column-gap: 25px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 230px;
`
export const FooterMainP = styled.p`
    margin: 0;
    align-self: center;
    text-align: justify;
    @media screen and (max-width: 500px){
        display:none;
    }

`
export const FooterH2 = styled.h2`
    margin: 0;
    margin-top: 20px;
`
export const FooterMainCompany = styled.div`
    display: grid;
    margin-left: 30px;
`
export const FooterMainPlans = styled.div`
    display: grid;
    grid-template-rows: 40px 40px 40px 40px;
    @media screen and (max-width: 500px){
        display:none;
    }  
`
export const FooterMainLinks = styled.div`
    display: grid;
    grid-template-rows: 20px 20px 20px;
    row-gap: 35px;
`
export const Links = styled.a`
    text-decoration: none;
    color: #fff;
    margin: 0;
    align-self: start;
`

export const ContactDiv = styled.div`
    display: grid;
    grid-template-columns: 30px auto;
    margin-top: 15px;
`
export const ContactImg = styled.img`
    width: 24px;
`
export const Copy = styled.div`
    background-color: #1E1E1E;
    display: grid;
    grid-template-rows: 90px;
`
export const CopyText = styled.p`
    text-align: center;
    margin-top: 30px;
`