import '../Styles/Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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

            <Navbar expand="lg" className="bg-transparent">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto OtherNavBar">
                            <Nav.Link className="LinkStyle ButtonAnimation" href="/">Home</Nav.Link>
                            <Nav.Link className="LinkStyle ButtonAnimation" href="/ofertas">Ofertas</Nav.Link>
                            <Nav.Link className="LinkStyle ButtonAnimation" href="/contato">Contato</Nav.Link>
                            <Nav.Link className="LinkStyle ButtonAnimation" href="/sobre">sobre</Nav.Link>
                            <Nav.Link className="LinkStyle ButtonAnimation" href="/faq">FAQ</Nav.Link>

                            <NavDropdown className="LinkStyle DropdownNavBar" title="Produtos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/produtos/manutencao-e-reparo">Manutenção e Reparo</NavDropdown.Item>
                                <NavDropdown.Item href="/produtos/pecas-e-componentes">Peças e Componentes</NavDropdown.Item>
                                <NavDropdown.Item href="/produtos/ferramentas-para-diagnostico">Ferramentas para Diagnóstico</NavDropdown.Item>
                                <NavDropdown.Item href="/produtos/organizacao-e-montagem">Organização e Montagem</NavDropdown.Item>
                                <NavDropdown.Item href="/produtos/resfriamento-e-ventilacao">Resfriamento e Ventilação</NavDropdown.Item>
                                <NavDropdown.Item href="/produtos/energia-e-protecao">Energia e Proteção</NavDropdown.Item>
                                <NavDropdown.Item href="/produtos/redes-e-conectividade">Redes e Conectividade</NavDropdown.Item>
                                <NavDropdown.Item href="/produtos/perifericos-e-acessorios">Periféricos e Acessórios</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

            <div className='OtherNavBar'>
                <LinkIMG Link="/pedidos" Image={Order} />
                <LinkIMG Link="/carrinho" Image={Cart} />
                <LinkIMG Link="/usuario" Image={User} />

            </div>
        </header >
    )
}
