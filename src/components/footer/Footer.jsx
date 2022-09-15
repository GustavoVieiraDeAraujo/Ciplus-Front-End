import { footerContent, footerTop } from "./Styles"
import './style.css'
import ImgFace from "../../assets/img/facebook.png"
import ImgTwitter from "../../assets/img/twitter.png"
import ImgInsta from "../../assets/img/instagram.png"
import ImgLink from "../../assets/img/linkedin.png"


export function Footer() {
    return (
        <div style={footerContent} className="footer-content">
            <div style={footerTop} className="footer-top">
                <div className="social-text">
                    <p>Acompanhe nas redes sociais</p>
                </div>
                <div className="social-img">
                    <a href="">
                        <img src={ImgFace} alt="" />
                    </a>
                    <a href="">
                        <img src={ImgTwitter} alt="" />
                    </a>
                    <a href="">
                    <img src={ImgInsta} alt="" />
                    </a>
                    <a href="">
                        <img src={ImgLink} alt="" />
                    </a>
                </div>
            </div>

            <div className="footer-main">
                <div className="company">
                    <h2>CIPLUS+</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem debitis aliquid, id nostrum corporis ea ipsum nemo beatae fugiat quidem accusamus laborum saepe voluptas quia consectetur reiciendis, iusto temporibus.</p>
                </div>
                <div className="plans">
                    <h2>PLANOS</h2>
                    <p>basic</p>
                    <p>standart</p>
                    <p>premium</p>
                    <p>black duo</p>
                </div>
                <div className="links">
                    <h2>LINKS ÚTEIS</h2>
                    <a href="">minha conta</a>
                    <a href="">catálogo</a>
                    <a href="">ajuda</a>
                </div>
                <div className="contact">
                    <h2>CONTATO</h2>
                    <div className="locate">
                        <img src="" alt="" />
                        <p>Brasil</p>
                    </div>
                    <div className="email">
                        <img src="" alt="" />
                        <p>ciplus@email.br</p>
                    </div>
                    <div className="tel">
                        <img src="" alt="" />
                        <p>0800 123 1234</p>
                    </div>
                </div>
            </div>
        </div>
    )
}