import '../Styles/Header.css'
import Link from './Link'
import LinkIMG from './LinkIMG'
import Order from '../assets/Icons/Orders.webp'
import Cart from '../assets/Icons/Cart.webp'
import User from '../assets/Icons/User.webp'

import Logo from "../assets/Logo/ByteTools.webp"

export default function Header() {
    return (
        <header className='HeaderStyle'>
            <div>
                <LinkIMG Link={"/"} Image={Logo} />

            </div>

            <div className='NavBar'>
                <Link Link={"/"} Name={"Home"} />
                <Link Link={"/produtos"} Name={"Produtos"} />
                <Link Link={"/contato"} Name={"Contato"} />
                <Link Link={"/sobre"} Name={"Sobre"} />
                <Link Link={"/faq"} Name={"FAQ"} />

            </div>

            <div className='NavBar'>
                <LinkIMG Link="/pedidos" Image={Order} />
                <LinkIMG Link="/carrinho" Image={Cart} />
                <LinkIMG Link="/usuario" Image={User} />

            </div>
        </header>
    )
}
