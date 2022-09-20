import * as C from "./styles"

import ImgFace from "./assets/facebook.png"
import ImgTwitter from "./assets/twitter.png"
import ImgInsta from "./assets/instagram.png"
import ImgLink from "./assets/linkedin.png"
import Home from "./assets/casa.png"
import Tel from "./assets/telefone.png"
import Email from "./assets/e-mail.png"

export function Footer() {
    return (
        <C.Footer>
            <C.FooterTop className="footer-top">
                <C.FooterTopDiv>
                    <p style={{
                        fontSize: "20px",
                        paddingLeft: "30px",
                        margin: "0px"
                    }}>Acompanhe nas redes sociais</p>
                </C.FooterTopDiv>

                <C.SocialDiv className="social-img">
                    <C.SocialA href="">
                        <C.SocialImg src={ImgFace} alt="" />
                    </C.SocialA>
                    <C.SocialA href="">
                        <C.SocialImg  src={ImgTwitter} alt="" />
                    </C.SocialA>
                    <C.SocialA href="">
                        <C.SocialImg  src={ImgInsta} alt="" />
                    </C.SocialA>
                    <C.SocialA href="">
                        <C.SocialImg src={ImgLink} alt="" />
                    </C.SocialA>
                </C.SocialDiv>
            </C.FooterTop>

            <C.FooterMain>
                <C.FooterMainCompany className="company">
                    <C.FooterH2>CIPLUS+</C.FooterH2>
                    <C.FooterMainP style={{
                        marginTop: "-50px",
                    }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem debitis aliquid, id nostrum corporis ea ipsum nemo beatae fugiat quidem accusamus laborum saepe voluptas quia consectetur reiciendis, iusto temporibus.</C.FooterMainP>
                </C.FooterMainCompany>

                <C.FooterMainPlans className="plans">
                    <C.FooterH2>PLANOS</C.FooterH2>
                    <C.FooterMainP>basic</C.FooterMainP>
                    <C.FooterMainP>standart</C.FooterMainP>
                    <C.FooterMainP>premium</C.FooterMainP>
                    <C.FooterMainP>black duo</C.FooterMainP>
                </C.FooterMainPlans >

                <C.FooterMainLinks className="links">
                    <C.FooterH2>LINKS</C.FooterH2>
                    <C.Links href="">minha conta</C.Links>
                    <C.Links href="">catálogo</C.Links>
                    <C.Links href="">ajuda</C.Links>
                </C.FooterMainLinks>

                <div className="contact">
                    <C.FooterH2>CONTATO</C.FooterH2>
                    <C.ContactDiv className="locate">
                        <C.ContactImg src={Home} alt="" />
                        <C.FooterMainP>Brasil</C.FooterMainP>
                    </C.ContactDiv>
                    <C.ContactDiv className="email">
                        <C.ContactImg src={Email} alt="" />
                        <C.FooterMainP>ciplus@email.br</C.FooterMainP>
                    </C.ContactDiv>
                    <C.ContactDiv className="tel">
                        <C.ContactImg src={Tel} alt="" />
                        <C.FooterMainP>0800 123 1234</C.FooterMainP>
                    </C.ContactDiv>
                </div>
            </C.FooterMain>
            <C.Copy className="copy">
                <C.CopyText>2022 &copy; CopyRight. CiPlus+ </C.CopyText>
            </C.Copy>
        </C.Footer>
    )
}