import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Lang from './data/Lang.json';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Devices from './Devices';
import Games from './Games';
import New from './New';
import Shop from './Shop';
import QA from './QA';
import PurchaseForm from './PurchaseForm';

function App() {
  const [accounts, setAccounts] = useState([
    {email: "admin@nexgen.com", password: "password123"},
    {email: "fakeaccount@gmail.com", password: "IHaveAids"}
  ]);

  //all this code below has to do with the sign in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [show, setShow] = useState(false);
  const [signErr, setSignErr] = useState(false);
  const handleClose = () => setShow(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const checkCredentials = () => {
    const account = accounts.find((acc) => acc.email === email && acc.password === password);
    if (account) {
      setShow(false);
      setIsLoggedIn(!isLoggedIn);
      setSignErr(false);
      setEmail('');
      setPassword('');
    } else {
      setSignErr(true);
    }
  };
  const handleButtonClick = () => {
    setSignErr(false);
    if (isLoggedIn){
      //change the code here so it double checks if you really want to sign out
      setIsLoggedIn(!isLoggedIn);
    }
    else {
      setShow(true);
    }
  };

  //code for sign up
  const [showSignUp, setShowSignUp] = useState(false);
  const [signUpError, setSignUpError] = useState(null);
  const handleSignUpButton = () => {
    setEmail('');
    setPassword('');
    setShowSignUp(!showSignUp);
    setShow(false);
  }
  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number
  
    if (!emailRegex.test(email)) {
      setSignUpError(text[8]);
      return;
    }
  
    if (!passwordRegex.test(password)) {
      setSignUpError(text[9]);
      return;
    }
  
    setAccounts(prevAccounts => [...prevAccounts, {email, password}]);
    setEmail('');
    setPassword('');
    setShowSignUp(false);
    setIsLoggedIn(true);
    setSignUpError(null); // Clears error message after successful login
  }


  //Code for the purchases
  const provinces = ["AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC","SK","YT"]
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [showOnline, setShowOnline] = useState(false);
  const [showPurchase, setShowPurchase] = useState(false);
  const handleOnlineP = () => {
    if (!isLoggedIn){
      alert ('You need to be logged in to make purchases');
    }
    else {
      setShowOnline(!showOnline);
    }
  }
  const handlePurchase = () => {
    if (!isLoggedIn){
      alert ('You need to be logged in to make purchases');
    }
    else {
      setShowPurchase(!showPurchase);
    }
  }
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  const handleOnlineClose = () => {
      setShowOnline(false);
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
      setError('');
  }

  const handleOnlineSave = () => {
      if (!/^\d+$/.test(cardNumber)) {
          setError("Invalid card number. Please enter only numbers.");
          return;
      }

      if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
          setError("Invalid expiry date. Please enter in the format MM/YY.");
          return;
      }

      if (!/^\d{3}$/.test(cvv)) {
          setError("Invalid CVV. Please enter a 3-digit number.");
          return;
      }

      setError('');
      setShowOnline(false);
      alert("Thank you for your purchase! Look at your emails for an online receipt.");
  }

  const handlePurchaseClose = () => {
    setShowPurchase(false);
    setAddress('');
    setCity('');
    setProvince('');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setError('');
  }

  const handlePurchaseSave = () => {
    if (address === '') {
      setError("Please enter a shipping address.");
      return;
    }
    if (city === '') {
      setError("Please enter a city.");
      return;
    }
    if (province === '') {
      setError("Please select a province.");
      return;
    }
    if (!/^\d+$/.test(cardNumber)) {
      setError("Invalid card number. Please enter only numbers.");
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      setError("Invalid expiry date. Please enter in the format MM/YY.");
      return;
    }
    if (!/^\d{3}$/.test(cvv)) {
      setError("Invalid CVV. Please enter a 3-digit number.");
      return;
    }

    setError('');
    setShowPurchase(false);
    alert("Thank you for your purchase! Check your emails for a receipt and shipping details.");
  }

  //this is the code for the language (I want to translate the sign in button as well)
  const [isEnglish, setIsEnglish] = useState(true);
  const handleLanguageChange = () => {
    setIsEnglish(!isEnglish);
  };
  const [text, setText] = useState(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
      if (isEnglish) {
          setText(Lang.enSign);
      } else {
          setText(Lang.frSign);
      }

      setIsPending(false);
  }, [isEnglish]);

  if (isPending){
    return <div>Loading...</div>;
  }
  else {
    return (
      <Router>
        <div className="App">
          <Navbar isLoggedIn={isLoggedIn} handleButtonClick={handleButtonClick}
          isEnglish={isEnglish} handleLanguageChange={handleLanguageChange}></Navbar>
          <div className="content">
            <Routes>
              <Route path='/' element={<Home isEnglish={isEnglish} handleOnlineP={handleOnlineP}/>}/>
              <Route path='/Devices' element={<Devices 
                                              handleOnlineP={handleOnlineP}
                                              handlePurchase={handlePurchase}/>}/>
              <Route path='/Games' element={<Games 
                                              isLoggedIn={isLoggedIn}
                                              isEnglish={isEnglish} 
                                              handleOnlineP={handleOnlineP}/>}/>
              <Route path='/Shop' element={<Shop handlePurchase={handlePurchase}/>}/>
              <Route path='/QA' element={<QA isLoggedIn={isLoggedIn} />}/>
            </Routes>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{ text[0] }</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {signErr && <p style={{ color: 'red' }}>{ text[2] }</p>}
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{ text[1] }</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>{ text[3] }</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer className="justify-content-center">
                <Button variant="primary" onClick={checkCredentials}>
                  { text[0] }
                </Button>
                <Button variant="primary" onClick={handleSignUpButton}>
                  { text[4] }
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal show={showSignUp} onHide={handleSignUpButton}>
              <Modal.Header closeButton>
                <Modal.Title>{text[5]}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {setSignUpError && <p style={{ color: 'red' }}>{signUpError}</p>}
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{text[6]}</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>{text[7]}</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer className="justify-content-center">
                <Button variant="primary" onClick={handleSignUp}>
                  {text[4]}
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal show={showOnline} onHide={handleOnlineP}>
              <Modal.Header>
                  <Modal.Title>Online Purchase</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="cardNumber">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control
                            type="text"
                            value={cardNumber}
                            onChange={e => setCardNumber(e.target.value)}
                            placeholder="Enter card number"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="expiryDate">
                        <Form.Label>Expiry Date (MM/YY)</Form.Label>
                        <Form.Control
                            type="text"
                            value={expiryDate}
                            onChange={e => setExpiryDate(e.target.value)}
                            placeholder="Enter expiry date"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="cvv">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                            type="text"
                            value={cvv}
                            onChange={e => setCvv(e.target.value)}
                            placeholder="Enter CVV"
                        />
                    </Form.Group>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="directDownload"
                      label="Download directly to connected Console"
                    />
                    {error && <div style={{color: 'red'}}>{error}</div>}
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="danger" onClick={handleOnlineClose}>
                      Close
                  </Button>
                  <Button variant="primary" onClick={handleOnlineSave}>
                      Confirm Purchase
                  </Button>
              </Modal.Footer>
            </Modal>

            <Modal show={showPurchase} onHide={handlePurchase}>
              <Modal.Header>
                  <Modal.Title>Physical Purchase</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="shippingAddress">
                    <Form.Label>Shipping Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="123 Street Name"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="City Name"
                      value={city}
                      onChange={e => setCity(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="province">
                    <Form.Label>Province</Form.Label>
                    <Form.Select 
                      value={province}
                      onChange={e => setProvince(e.target.value)}
                    >
                      {provinces.map((prov, index) => (
                        <option key={index} value={prov}>
                          {prov}
                        </option>
                      ))}
                  </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="creditCardNumber">
                    <Form.Label>Credit Card Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter credit card number"
                      value={cardNumber}
                      onChange={e => setCardNumber(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="expiryDate">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={e => setExpiryDate(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="cvv">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter CVV"
                      value={cvv}
                      onChange={e => setCvv(e.target.value)}
                    />
                  </Form.Group>
                </Form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handlePurchaseClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handlePurchaseSave}>
                  Confirm Purchase
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
