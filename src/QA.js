import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const QA = ( {isLoggedIn} ) => {

    const questions = [
        //Consider having the questions and maybe even all data like this inside of a JSON file where we read it
        {
            id: 1,
            question: 'How do I connect my console to the internet?',
            answer: 'To connect your console to the internet, you can use an Ethernet cable to directly connect it to your router, or you can set up a wireless connection by accessing the console\'s network settings and following the on-screen instructions.',
        },
        {
            id: 2,
            question: 'Can I play physical game discs on the console, or is it only digital downloads?',
            answer: 'Yes, our console supports both physical game discs and digital downloads. You can purchase physical game discs from retailers or download games directly from our digital store.',
        },
        {
            id: 3,
            question: 'What is the warranty coverage for the console?',
            answer: 'Our console comes with a standard manufacturer\'s warranty that covers defects in materials and workmanship for a specific period. Please refer to the warranty documentation provided with your console for detailed information on coverage and duration.'
        },
        {
            id: 4,
            question: 'How can I expand the storage capacity of the console?',
            answer: 'You can expand the storage capacity of the console by connecting an external hard drive that meets the recommended specifications. The console will detect the external drive and allow you to install and run games from it.',
        },
        {
            id: 5,
            question: 'Is the console backward compatible with previous console generations?',
            answer: 'Yes, our console offers backward compatibility with select previous console generations. This means you can play certain games from older consoles on the new system. Check our official website or documentation for a list of compatible games.',
        },
        {
            id: 6,
            question: 'How often are system updates released, and what do they include?',
            answer: 'We regularly release system updates to enhance the console\'s functionality, performance, and security. These updates may include new features, bug fixes, improvements to existing features, and compatibility enhancements with the latest games and services.',
        },
        {
            id: 7,
            question: 'What online multiplayer options are available on the console?',
            answer: 'Our console provides online multiplayer capabilities, allowing you to play games with friends and other players worldwide. You can subscribe to our online service to access multiplayer features, enjoy free monthly games, and benefit from exclusive discounts and offers.',
        }
        // Add more questions and answers here...
    ];

    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const handleQuestionClick = (questionId) => {
        setSelectedQuestion(questionId);
    };

    const [input, setInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent form submission and page refresh

        if (!isLoggedIn) {
            alert('You need to be logged in to post a question');
        } else if (input.trim() === '') { // check if input is empty or consists only of white spaces
            setErrorMessage('Please type something');
        } else {
            setErrorMessage(''); // clear error message
            setInput('');
            alert('Thanks for leaving a question we will get a professional to answer it and post it asap!');
        }
    };

    const handleChange = (e) => {
        setInput(e.target.value); // update input value as user types
    };

    return ( 
        <div className="qa">
            <h2>Popular Questions and Their Answers</h2>
            <h4 className="mb-4" style={{color: '#8b7979'}}>
            Feel free to leave your own question and 
            we will notify you once you get an answer
            </h4>
            <Accordion defaultActiveKey="0">
                {questions.map((q) => (
                    <Accordion.Item key={q.id} eventKey={q.id.toString()}>
                        <Accordion.Header onClick={() => handleQuestionClick(q.id)}>
                            {q.question}
                        </Accordion.Header>
                        <Accordion.Body>
                            {selectedQuestion === q.id && q.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <Form.Label className="mt-4" htmlFor="inputPassword5">Leave a Question:</Form.Label>
            <Form.Control
                id="inputPassword5"
                value={input}  
                onChange={handleChange}  
            />
            <p style={{color: 'red', fontSize: '20px'}} >{errorMessage}</p>
            <Button className="mt-2" onClick={ handleSubmit }>
                Submit Question
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
                    <h3 className="text-white mb-4">Follow Us On Social Media</h3>
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

export default QA;