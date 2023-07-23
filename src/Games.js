import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lang from './data/Lang.json';

import Minecraft from './sitephotos/Minecraft.jpg';
import Fifa23 from './sitephotos/Fifa23.jpg';
import Rocket from './sitephotos/RocketLeague.jpg';
import Cod from './sitephotos/Codwarzone2.jpg';
import Fortnite from './sitephotos/fortnite.jpg';
import BlackOps3 from './sitephotos/Black_Ops_3.jpg';
import BlackOps4 from './sitephotos/Black_Ops_4.jpg';
import RedDead from './sitephotos/Red_Dead_Redemption_II.jpg';
import Batman from './sitephotos/batman.jpg';
import gta5 from './sitephotos/gta5.png';
import pubg from './sitephotos/pubg.jpg';
import lego from './sitephotos/Lego_starwars.jpg';
import starwars from './sitephotos/Star_wars.webp';
import spiderman from './sitephotos/Spiderman.jpg';
import spidermanblack from './sitephotos/Spiderman-milesmorales.webp';
import f1 from './sitephotos/F1_23.jpg';
import eldenring from './sitephotos/eldenring.webp';

const Games = ( {isLoggedIn, isEnglish, handleOnlineP} ) => {

    const [isPending, setIsPending] = useState(true);
    const [text, setText] = useState(null);
    useEffect(() => {
        if (isEnglish) {
            setText(Lang.enGames);
        } else {
            setText(Lang.frGames);
        }
        setIsPending(false);
    }, [isEnglish]);


    const cardData = [
        {
            id: 1,
            title: 'Minecraft',
            gameType: 'Adventure',
            description: 'Unleash your creativity in a blocky world with millions of players worldwide crafting and building their own adventures.',
            ratingsUsers: '4.7 Star Rating 140M Users Worldwide',
            price: 19.99,
            image: Minecraft,
        },
        {
            id: 2,
            title: 'Fifa 23',
            gameType: 'Sport',
            description: 'Experience the thrill of football with realistic gameplay and stunning graphics, drawing in a massive global fanbase.',
            ratingsUsers: '4.2 Star Rating 52M Users Worldwide',
            price: 59.99,
            image: Fifa23,
        },
        {
            id: 3,
            title: 'Rocket League',
            gameType: 'Sport',
            description: 'Combine soccer with high-octane vehicular action in this multiplayer hit.',
            ratingsUsers: '4.9 Star Rating 93M Users Worldwide',
            price: 0.00,
            image: Rocket,
        },
        {
            id: 4,
            title: 'Call Of Duty Warzone 2',
            gameType: 'FPS',
            description: 'Engage in intense battle royale warfare in this sequel, likely to build on the success of its predecessor.',
            ratingsUsers: '3.9 Star Rating 67M Users Worldwide',
            price: 79.99,
            image: Cod,
        },
        {
            id: 5,
            title: 'Fortnite',
            gameType: 'Action',
            description: 'Join the ever-expanding army of players fighting to be the last one standing in the vibrant and dynamic world of Fortnite.',
            ratingsUsers: '4.6 Star Rating 350m Users Worldwide',
            price: 0,
            image: Fortnite,
        },
        {
            id: 6,
            title: 'COD Black Ops 3',
            gameType: 'FPS',
            description: 'Experience heart-pounding action in this fan-favorite installment of the Call of Duty franchise.',
            ratingsUsers: '4.8 Star Rating 60M Users Worldwide',
            price: 34.99,
            image: BlackOps3,
        },
        {
            id: 7,
            title: 'COD Black Ops 4',
            gameType: 'FPS',
            description: 'Continue the relentless combat and multiplayer excitement with millions of players joining the action-packed battles.',
            ratingsUsers: '3.6 Star Rating 47M Users Worldwide',
            price: 59.99,
            image: BlackOps4,
        },
        {
            id: 8,
            title: 'Red Dead Redemption 2',
            gameType: 'Adventure',
            description: 'Immerse yourself in the Wild West as you embark on an epic journey in this critically acclaimed game.',
            ratingsUsers: '4.7 Star Rating 30M Users Worldwide',
            price: 69.99,
            image: RedDead,
        },
        {
            id: 9,
            title: 'Grand Theft Auto 5',
            gameType: 'Action',
            description: 'Live the life of crime and chaos in the vast open world of Los Santos, attracting an extensive and dedicated player base.',
            ratingsUsers: '4.8 Star Rating 150M Users Worldwide',
            price: 69.99,
            image: gta5,
        },
        {
            id: 10,
            title: 'Batman Arkham Knight',
            gameType: 'Action',
            description: 'Embrace the dark and immersive world of Batman, captivating millions of fans with its compelling storyline and gameplay.',
            ratingsUsers: '4.3 Star Rating 15M Users Worldwide',
            price: 39.99,
            image: Batman,
        },
        {
            id: 11,
            title: 'PlayerUnknown Battlegrounds',
            gameType: 'Action',
            description: 'Drop into intense battles in this influential battle royale game that has amassed a massive following.',
            ratingsUsers: '2.1 Star Rating 72M Users Worldwide',
            price: 0,
            image: pubg,
        },
        {
            id: 12,
            title: 'Lego Star Wars Skywalker Saga',
            gameType: 'Adventure',
            description: 'Relive iconic Star Wars moments in a playful brick-filled world that appeals to fans of all ages.',
            ratingsUsers: '4.6 Star Rating 10M Users Worldwide',
            price: 79.99,
            image: lego,
        },
        {
            id: 13,
            title: 'Spider Man',
            gameType: 'Action',
            description: 'Swing through the streets of New York as the iconic superhero in this action-packed adventure, capturing the hearts of millions of Marvel fans.',
            ratingsUsers: '4.9 Star Rating 12M Users Worldwide',
            price: 59.99,
            image: spiderman,
        },
        {
            id: 14,
            title: 'Spider Man Miles Morales',
            gameType: 'Action',
            description: 'Step into the shoes of Miles Morales in this thrilling standalone adventure set in the Marvel universe.',
            ratingsUsers: '4.3 Star Rating 8M Users Worldwide',
            price: 21.99,
            image: spidermanblack,
        },
        {
            id: 15,
            title: 'Star Wars Jedi Survivor',
            gameType: 'Adventure',
            description: 'Embark on an epic journey as a Jedi in a dangerous and unexplored part of the galaxy.',
            ratingsUsers: '2.1 Star Rating 5M Users Worldwide',
            price: 79.99,
            image: starwars,
        },
        {
            id: 16,
            title: 'F1 23',
            gameType: 'Sport',
            description: 'Experience the adrenaline rush of Formula 1 racing in this latest installment.',
            ratingsUsers: '4.0 Star Rating 10M Users Worldwide',
            price: 39.99,
            image: f1,
        },
        {
            id: 17,
            title: 'Elden Ring',
            gameType: 'Adventure',
            description: 'Enter a dark fantasy world in this highly anticipated game that is expected to captivate a substantial player base.',
            ratingsUsers: '4.8 Star Rating 20M Users Worldwide',
            price: 79.99,
            image: eldenring,
        }

    ];

    const [selectedGameType, setSelectedGameType] = useState('All');
    const [selectedPrice, setPriceSort] = useState(null);
    const [priceRange, setPriceRange] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const navigate = useNavigate();

    const handleGameTypeChange = (gameType) => {
        setSelectedGameType(gameType);
    };

    const handlePriceRange = (price) => {
        if (price === priceRange){
            setPriceRange(null);
        }
        else {
            setPriceRange(price);
        }
    }

    const handlePriceSort = (priceSort) => {
        setPriceSort(priceSort);
    }


    let filteredCards = cardData.filter(card =>
        (selectedGameType === 'All' || card.gameType === selectedGameType) 
        && card.title.toLowerCase().includes(searchTerm.toLowerCase())
        && (
            priceRange === "twenty" && card.price <= 19.99 ||
            priceRange === "fourty" && 20 <= card.price && card.price <= 39.99 ||
            priceRange === "sixty" && 40 <= card.price && card.price <= 59.99 ||
            priceRange === "eighty" && 60 <= card.price && card.price <= 79.99 ||
            priceRange === null // if no price range selected, show all cards
        )
    );

    let filteredCardsSorted = filteredCards;

    filteredCardsSorted.sort((a, b) => {
        if (selectedPrice === 'Low') {
            return a.price - b.price;
        } else if (selectedPrice === 'High') { // assumes 'highToLow' if not 'lowToHigh'
            return b.price - a.price;
        }
        else {
            filteredCardsSorted = filteredCards;
        }
    });

    if(isPending){
        return <div>Loading...</div>
    }
    else{
        return (
            <div className="games">
                <h1>{text[0]}</h1>
                <div className="mx-auto" style={{ width: '50rem' }}>
                            <Form.Control
                                type="text"
                                placeholder={text[1]}
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                <div className="d-flex">
                    <div className="container-outline dropdown-section me-2">
                        <Dropdown>
                            <Dropdown.Toggle variant="success dropdown">
                                {text[2]}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown">
                                <Dropdown.Item active={selectedGameType === 'All'} onClick={() => handleGameTypeChange('All')}>{text[5]}</Dropdown.Item>
                                <Dropdown.Item active={selectedGameType === 'Adventure'} onClick={() => handleGameTypeChange('Adventure')}>{text[6]}</Dropdown.Item>
                                <Dropdown.Item active={selectedGameType === 'Action'} onClick={() => handleGameTypeChange('Action')}>{text[7]}</Dropdown.Item>
                                <Dropdown.Item active={selectedGameType === 'Sport'} onClick={() => handleGameTypeChange('Sport')}>{text[8]}</Dropdown.Item>
                                <Dropdown.Item active={selectedGameType === 'FPS'} onClick={() => handleGameTypeChange('FPS')}>{text[9]}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="mt-1">
                            <Dropdown.Toggle variant="success dropdown">
                                {text[3]}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown">
                                <Dropdown.Item active={selectedPrice === 'Base'} onClick={() => handlePriceSort('Base')}>{text[10]}</Dropdown.Item>
                                <Dropdown.Item active={selectedPrice === 'High'} onClick={() => handlePriceSort('High')}>{text[11]}</Dropdown.Item>
                                <Dropdown.Item active={selectedPrice === 'Low'} onClick={() => handlePriceSort('Low')}>{text[12]}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Group className="mt-2">
                            <Form.Check
                                type="switch"
                                label="0-$19.99"
                                checked={priceRange === "twenty"}
                                onChange={() => handlePriceRange("twenty")}
                            />
                            <Form.Check
                                type="switch"
                                label="$20-$39.99"
                                checked={priceRange === "fourty"}
                                onChange={() => handlePriceRange("fourty")}
                            />
                            <Form.Check
                                type="switch"
                                label="$40-$59.99"
                                checked={priceRange === "sixty"}
                                onChange={() => handlePriceRange("sixty")}
                            />
                            <Form.Check
                                type="switch"
                                label="$60-$79.99"
                                checked={priceRange === "eighty"}
                                onChange={() => handlePriceRange("eighty")}
                            />
                        </Form.Group>
                    </div>
                    <div>
                        <div className=" my-3 card-container">
                            {filteredCards.map((card) => (
                                <Card key={card.id} style={{ width: '14rem', height: '41rem' }}>
                                    <Card.Img variant="top" src={ card.image }/>
                                    <Card.Body>
                                        <Card.Title>{card.title}</Card.Title>
                                        <Card.Text>{card.description}</Card.Text>
                                        <div className="card-description">
                                            <Card.Text className="ratings" >{card.ratingsUsers}</Card.Text>
                                            <Button variant="primary" onClick={ handleOnlineP }>${card.price} {text[4]}</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Games;