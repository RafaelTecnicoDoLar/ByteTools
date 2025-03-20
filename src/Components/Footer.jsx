import '../Styles/Footer.css'
import Logo from '../assets/Logo/ByteTools.webp'

export default function Footer(){
    return(
        <footer className="Footer">
            <a href="/" className="LinkStyle ButtonAnimation"> <img className="LogoLink" src={Logo} /> </a>

            <p>
                teste footer
            </p>
        </footer>
    )
}