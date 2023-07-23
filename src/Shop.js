import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import hoodie1 from './sitephotos/hoodie1.jpg';
import hoodie2 from './sitephotos/hoodie2.jpg';
import hoodie3 from './sitephotos/hoodie3.jpg';
import hoodie4 from './sitephotos/hoodie4.jpg';
import shirt1 from './sitephotos/shirt1.webp';
import shirt2 from './sitephotos/shirt2.jpg';
import shirt3 from './sitephotos/shirt33.jpg';
import shirt4 from './sitephotos/shirt4.jpg';
import pants1 from './sitephotos/pants1.jpg';
import pants2 from './sitephotos/pants2.jpeg';
import pants3 from './sitephotos/pants3.jpg';
import pants4 from './sitephotos/pants4.jpg';

const Shop = ({handlePurchase}) => {
    const hoodies = [
        {
            id: 1,
            title: 'CozyFleece Hoodie',
            description: 'Warmth and comfort for chilly days.',
            ratings: '4.2 Star Rating',
            price: 49.99,
            image: hoodie1,
        },
        {
            id: 2,
            title: 'UrbanEssentials Hoodie',
            description: 'Versatile style for urban explorers.',
            ratings: '4.4 Star Rating',
            price: 59.99,
            image: hoodie2,
        },
        {
            id: 3,
            title: 'ClassicComfort Hoodie',
            description: 'Timeless comfort and style.',
            ratings: '4.5 Star Rating',
            price: 29.99,
            image: hoodie3,
        },
        {
            id: 4,
            title: 'WeekendRelax Hoodie',
            description: 'Laid-back comfort for weekends.',
            ratings: '4.3 Star Rating',
            price: 59.99,
            image: hoodie4,
        }
    ]

    const shirts = [
        {
            id: 1,
            title: 'EverydayEssence Shirt',
            description: 'Elegance for everyday wear.',
            ratings: '4.9 Star Rating',
            price: 19.99,
            image: shirt1,
        },
        {
            id: 2,
            title: 'FreshUrban Shirt',
            description: 'Modern twist on urban fashion.',
            ratings: '4.2 Star Rating',
            price: 14.99,
            image: shirt2,
        },
        {
            id: 3,
            title: 'CasualChic Shirt',
            description: 'Casual sophistication.',
            ratings: '3.9 Star Rating',
            price: 25.99,
            image: shirt3,
        },
        {
            id: 4,
            title: 'VersatileClassic Shirt',
            description: 'Day-to-night style.',
            ratings: '4.5 Star Rating',
            price: 24.99,
            image: shirt4,
        }
    ]

    const pants = [
        {
            id: 1,
            title: 'EasyBreeze Pants',
            description: 'Breezy and relaxed fit.',
            ratings: '4.2 Star Rating',
            price: 49.99,
            image: pants1,
        },
        {
            id: 2,
            title: 'EverydayFlex Pants',
            description: ' Mobility on-the-go.',
            ratings: '4.4 Star Rating',
            price: 44.99,
            image: pants2,
        },
        {
            id: 3,
            title: 'ComfyUrban Pants',
            description: 'Comfortable urban exploration.',
            ratings: '4.5 Star Rating',
            price: 39.99,
            image: pants3,
        },
        {
            id: 4,
            title: 'CasualChic Pants',
            description: 'Effortless casual elegance.',
            ratings: '4.3 Star Rating',
            price: 49.99,
            image: pants4,
        }
    ]

    return (  
        <div className="shop">
            <h1>Browse Through our Shop</h1>

            <div className="mt-5 clothes">
                <h2 className="m-3">Have a look at our sweaters</h2>
                <div className="row row-cols-1 row-cols-md-5 justify-content-center">
                    {hoodies.map((card) => (
                        <Card className="m-2" key={card.id} style={{ width: '18rem', height: '38rem' }}>
                            <div>
                                <Card.Img variant="top" src={card.image} />
                            </div>
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.description}</Card.Text>
                                <div className="card-description">
                                    <Card.Text className="ratings" >{card.ratings}</Card.Text>
                                    <Form.Select>
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>Large</option>
                                    </Form.Select>
                                    <Button className="mt-2" variant="primary" onClick={handlePurchase}>${card.price} Purchase</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

                <h2 className="m-3">Have a look at our shirts</h2>
                <div className="row row-cols-1 row-cols-md-5 justify-content-center">
                    {shirts.map((card) => (
                        <Card className="m-2" key={card.id} style={{ width: '18rem', height: '32rem' }}>
                            <div>
                                <Card.Img variant="top" src={card.image} />
                            </div>
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.description}</Card.Text>
                                <div className="card-description">
                                    <Card.Text className="ratings" >{card.ratings}</Card.Text>
                                    <Form.Select>
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>Large</option>
                                    </Form.Select>
                                    <Button className="mt-2" variant="primary" onClick={handlePurchase}>${card.price} Purchase</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

                <h2 className="m-3">Check out our pants</h2>
                <div className="row row-cols-1 row-cols-md-5 justify-content-center">
                    {pants.map((card) => (
                        <Card className="m-2" key={card.id} style={{ width: '18rem', height: '38rem' }}>
                            <div>
                                <Card.Img variant="top" src={card.image} />
                            </div>
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>{card.description}</Card.Text>
                                <div className="card-description">
                                    <Card.Text className="ratings" >{card.ratings}</Card.Text>
                                    <Form.Select>
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>Large</option>
                                    </Form.Select>
                                    <Button className="mt-2" variant="primary" onClick={handlePurchase}>${card.price} Purchase</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Shop;