import '../Styles/Home.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import Ferramentas from "../assets/Annoucement/FerramentasEDiagnosticos.png"
import Corsair from "../assets/Annoucement/Corsair.png"
import WaterCoolers from "../assets/Annoucement/WaterCoolers.png"


export default function Home() {
    return (
        <div className='Home'>
            <div className='Container_Carousel'>
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <img src={WaterCoolers} />

                    </Carousel.Item>

                    <Carousel.Item interval={5000}>
                        <img src={Corsair} />

                    </Carousel.Item>

                    <Carousel.Item interval={5000}>
                        <img src={Ferramentas} />

                    </Carousel.Item>
                </Carousel>

            </div>

            <div className='sale'>
                <div>
                    <p className='TitleBlack'>
                        Queridinhos dos tecnicos 🧑‍💻
                    </p>

                    <Carousel>
                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Carousel.Item>

                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Carousel.Item>

                    <Carousel.Item>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </Carousel.Item>

                    
                </Carousel>

            </div>

        </div>

        </div >
    )
}