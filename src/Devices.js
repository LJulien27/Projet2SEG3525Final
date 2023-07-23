import redController from './sitephotos/redController.jpg'
import whiteController from './sitephotos/whiteController.jpg';
import galaxyController from './sitephotos/galaxyController.jpg';
import blackController from './sitephotos/blackController.jpg';
import purpleController from './sitephotos/purpleController.webp';
import fakeconsole from './sitephotos/fakeconsole.jpg';
import camera from './sitephotos/camera.jpg';
import headphones1 from './sitephotos/headphones1.jpg';
import headphones2 from './sitephotos/headphones2.jpg';
import headphones3 from './sitephotos/headphones3.jpg';
import harddrive1 from './sitephotos/externalharddrive1.png';
import harddrive2 from './sitephotos/externalharddrive2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function DeviceKnowMore(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    NEXGEN NEXUS
                </Modal.Title>
                <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
            </Modal.Header>
            <Modal.Body>
                <h4>Hardware Details</h4>
                <p>
                High-performance processor for lightning-fast gameplay.
                Advanced GPU with 4K resolution support for stunning visuals.
                16GB GDDR6 RAM for smooth multitasking.
                Storage options: 1TB to 2TB SSD.
                Integrated 4K UHD Blu-ray optical drive.
                Redesigned, comfortable controller with haptic feedback and adaptive triggers.
                Built-in Wi-Fi and Bluetooth for online gaming and device integration.
                Immersive 3D audio technology.
                Backward compatibility for previous-gen games.
                Sleek and intuitive user interface.
                </p>
            </Modal.Body>
        </Modal>
    );
}

const Devices = ({handleOnlineP, handlePurchase}) => {
    const [dKnowMore, setDKnowMoreShow] = useState(false);

    const controllers = [
        {
            id: 1,
            title: 'White Nexus Controller',
            description: 'Some quick example text for description and details about the game in question.',
            ratings: '4.2 Star Rating',
            price: 59.99,
            image: whiteController,
        },
        {
            id: 2,
            title: 'Red Nexus Controller',
            description: 'Some quick example text for description and details about the game in question.',
            ratings: '4.7 Star Rating',
            price: 59.99,
            image: redController,
        },
        {
            id: 3,
            title: 'Galaxy Nexus Controller',
            description: 'Some quick example text for description and details about the game in question.',
            ratings: '4.8 Star Rating',
            price: 59.99,
            image: galaxyController,
        },
        {
            id: 4,
            title: 'Black Nexus Controller',
            description: 'Some quick example text for description and details about the game in question.',
            ratings: '4.5 Star Rating',
            price: 59.99,
            image: blackController,
        },
        {
            id: 5,
            title: 'Purple Nexus Controller',
            description: 'Some quick example text for description and details about the game in question.',
            ratings: '4.6 Star Rating',
            price: 59.99,
            image: purpleController,
        }

    ]

    const extraDevices = [
        {
            id: 1,
            title: 'Nexgen Camera',
            description: 'The NexGen Console Camera is a powerful companion for console gamers, enabling effortless livestreaming, recording, and interaction. With crystal-clear resolution and a sleek design, level up your streaming game and engage with your audience like never before.',
            ratings: '3.7 Star Rating',
            price: 39.99,
            image: camera,
        },
        {
            id: 2,
            title: 'NexGen ProXGamer',
            description: 'Immerse yourself in precision sound and lasting comfort with NexGen ProXGamer headphones, designed to elevate your gaming experience to new heights.',
            ratings: '4.7 Star Rating',
            price: 69.99,
            image: headphones1,
        },
        {
            id: 3,
            title: 'NexGen HyperPulse',
            description: 'Feel the pulse of gaming freedom with NexGen HyperPulse wireless headphones, featuring intense bass and unrivaled comfort for epic gaming sessions.',
            ratings: '4.9 Star Rating',
            price: 59.99,
            image: headphones3,
        },
        {
            id: 4,
            title: 'NexGen StealthStrike',
            description: 'Unleash stealth and precision with NexGen StealthStrike gaming headphones, delivering crystal-clear audio and a sleek design for seamless gaming on the move.',
            ratings: '4.5 Star Rating',
            price: 79.99,
            image: headphones2,
        },
        {
            id: 5,
            title: '500GB External HardDrive',
            description: 'Expand your console\'s storage effortlessly with portable external hard drives. Download and keep your favorite games, apps, and media hassle-free, and enjoy a vast gaming library at your fingertips.',
            ratings: '4.2 Star Rating',
            price: 44.99,
            image: harddrive1,
        },
        {
            id: 6,
            title: '1TB External HardDrive',
            description: 'Expand your console\'s storage effortlessly with portable external hard drives. Download and keep your favorite games, apps, and media hassle-free, and enjoy a vast gaming library at your fingertips.',
            ratings: '4.5 Star Rating',
            price: 79.99,
            image: harddrive2,
        }
    ]

    return ( 
        <div>
            <h1 className="mb-3">Check out our Devices</h1>
            <div className="container container-outline d-flex justify-content-center">
                {/* First Image-Description Pair */}
                <div className="row">
                    <div className="col-md-6">
                        <img src={fakeconsole} alt="My Image 1" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="my-3">NEXGEN NEXUS</h3>
                        <p>
                            Introducing the NEXGEN Nexus, the latest innovation in gaming consoles from NEXGEN. 
                            With the NEXGEN Nexus, we're redefining the gaming experience and pushing the boundaries 
                            of technology. Here are some exciting details about this cutting-edge console
                        </p>
                        <div style={{ marginTop: "180px" }}>
                            <Button variant="outline-primary" size="lg" onClick={() => setDKnowMoreShow(true)}>
                                Know More
                            </Button>
                            <DeviceKnowMore
                                show={dKnowMore}
                                onHide={() => setDKnowMoreShow(false)}
                            />
                            <Button className="ms-3" variant="outline-primary" size="lg" onClick={handleOnlineP}>$599.99 Purchase</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 controllers">
                <h2 className="m-3">Have a look at our Controllers</h2>
                <div className="row row-cols-1 row-cols-md-5 justify-content-center">
                    {controllers.map((card) => (
                        <Card className="m-2" key={card.id} style={{ width: '14rem' }}>
                            <div className="card-image-container">
                                <Card.Img variant="top" src={card.image} />
                            </div>
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.description}</Card.Text>
                                <Card.Text className="ratings" >{card.ratings}</Card.Text>
                                <Button variant="primary" onClick={handlePurchase}>${card.price} Purchase</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="mt-5 controllers">
                <h2 className="m-3">Extra Nexgen Devices</h2>
                <div className="row row-cols-1 row-cols-md-5 justify-content-center">
                    {extraDevices.map((card) => (
                        <Card className="m-2" key={card.id} style={{ width: '18rem', height: '36rem' }}>
                            <div className="">
                                <Card.Img variant="top" src={card.image} />
                            </div>
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.description}</Card.Text>
                                    <div className="card-description">
                                        <Card.Text className="ratings" >{card.ratings}</Card.Text>
                                        <Button variant="primary" onClick={handlePurchase}>${card.price} Purchase</Button>
                                    </div>
                                </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Devices;