import './App.css';
import './index.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lang from './data/Lang.json';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import fakeconsole from './sitephotos/fakeconsole.jpg'
import EAFC from './sitephotos/EAFC24.jpg';
import NexgenInf from './sitephotos/NexgenInf.jpg';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({ isEnglish, handleOnlineP }) => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/Devices');
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [text, setText] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        if (isEnglish) {
            setText(Lang.enHome);
        } else {
            setText(Lang.frHome);
        }

        setIsPending(false);
    }, [isEnglish]);

    if (isPending){
        return <div>Loading...</div>
    }
    else {
        return ( 
            <div>
                <div className="header">
                    <h1 className="nexgenTitle" >NEXGEN</h1>
                    <p style={{ fontSize: '20px' }} >
                        {text[1]}
                    </p>
                </div>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>NEXGEN</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <p>{text[2]}</p>
                        <p>{text[3]}</p>
                        <p dangerouslySetInnerHTML={{ __html: text[4] }} />
                    </Offcanvas.Body>
                </Offcanvas>
                <div className="container container-home d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={fakeconsole} alt="NEXGEN NEXUS" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="nexgenTitle" style={{marginTop: '80px'}} >{text[5]}</h3>
                            <div style={{ marginTop: "80px" }}>
                                <Button variant="outline-primary" size="lg" onClick={handleNavigate}>
                                    {text[6]}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 container container-home d-flex justify-content-center">
                <div className="row">
                        <div className="col-md-6">
                            <img src={EAFC} alt="EA FC 24 cover" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="nexgenTitle" style={{marginTop: '60px'}} >{text[7]}</h3>
                            <p className="nexgenTitle" style={{fontSize: '18px'}}>{text[8]}</p>
                            <div style={{ marginTop: "50px" }}>
                                <p style={{ fontSize: '20px'}} className="nexgenTitle">$99.99</p>
                                <Button variant="outline-primary" size="lg" onClick={handleOnlineP}>
                                    {text[9]}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 container container-home d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={NexgenInf} alt="NEXGEN INFINITY cover" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="nexgenTitle" style={{marginTop: '80px'}} >{text[10]}</h3>
                            <p className="nexgenTitle" style={{fontSize: '18px'}}>{text[11]}</p>
                            <div style={{ marginTop: "80px" }}>
                                <p style={{ fontSize: '20px'}} className="nexgenTitle">{text[14]}</p>
                                <Button variant="outline-primary" size="lg" onClick={handleOnlineP}>
                                    {text[12]}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <Button className="contact-button mt-4" onClick={handleShow}>
                    {text[0]}
                </Button>

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="mt-5" style={{
                        backgroundColor: 'blueviolet', 
                        width: '1200px', 
                        height: '300px', 
                        borderRadius: '10px', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        color: 'white',
                        margin: '0 auto'}}>
                        <h3 className="text-white mb-4">{text[13]}</h3>
                        <h5 className="text-white mb-4">@NEXGEN</h5>
                        <div>
                            <a href="https://twitter.com/nexgen" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-twitter text-white fs-1 mx-3"></i>
                            </a>
                            <a href="https://www.facebook.com/nexgen" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-facebook text-white fs-1 mx-3"></i>
                            </a>
                            <a href="https://www.instagram.com/nexgen" target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-instagram text-white fs-1 mx-3"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;