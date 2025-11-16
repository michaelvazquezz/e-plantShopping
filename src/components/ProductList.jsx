import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import './ProductList.css';

export default function ProductList() {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState({});

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15",
                    sale: true
                },
                {
                    name: "Spider Plant",
                    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxhbnR8ZW58MHx8MHx8fDA%3D",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$15",
                    sale: true
                },
                {
                    name: "Peace Lily",
                    image: "https://images.unsplash.com/photo-1502810365585-56ffa361fdde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBsYW50fGVufDB8fDB8fHww",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$15",
                    sale: true
                },
                {
                    name: "Rubber Plant",
                    image: "https://images.unsplash.com/photo-1521206698660-5e077ff6f9c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBsYW50fGVufDB8fDB8fHww",
                    description: "Excellent for removing toxins from indoor air.",
                    cost: "$18",
                    sale: false
                },
                {
                    name: "Boston Fern",
                    image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBsYW50fGVufDB8fDB8fHww",
                    description: "Natural humidifier and air purifier.",
                    cost: "$12",
                    sale: true
                },
                {
                    name: "Aloe Vera",
                    image: "https://plus.unsplash.com/premium_photo-1669869250186-37a3f06180ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBsYW50fGVufDB8fDB8fHww",
                    description: "Purifies air and has healing properties.",
                    cost: "$10",
                    sale: false
                },
                {
                    name: "English Ivy",
                    image: "https://plus.unsplash.com/premium_photo-1675864662842-6efc0ef31f67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBsYW50fGVufDB8fDB8fHww",
                    description: "Reduces airborne mold and fecal particles.",
                    cost: "$14",
                    sale: true
                },
                {
                    name: "Bamboo Palm",
                    image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBsYW50fGVufDB8fDB8fHww",
                    description: "Filters benzene and trichloroethylene.",
                    cost: "$20",
                    sale: false
                },
                {
                    name: "Dracaena",
                    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBsYW50fGVufDB8fDB8fHww",
                    description: "Removes multiple toxins from indoor air.",
                    cost: "$16",
                    sale: true
                },
                {
                    name: "Golden Pothos",
                    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHBsYW50fGVufDB8fDB8fHww",
                    description: "Easy to grow and effective air purifier.",
                    cost: "$11",
                    sale: false
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHBsYW50fGVufDB8fDB8fHww",
                    description: "Thrives in low light and requires little water.",
                    cost: "$22",
                    sale: true
                },
                {
                    name: "Jade Plant",
                    image: "https://plus.unsplash.com/premium_photo-1674237276501-595398f90f87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHBsYW50fGVufDB8fDB8fHww",
                    description: "Symbol of good luck and very resilient.",
                    cost: "$13",
                    sale: false
                },
                {
                    name: "Cactus",
                    image: "https://plus.unsplash.com/premium_photo-1680630201319-a028d6b84cf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHBsYW50fGVufDB8fDB8fHww",
                    description: "Perfect for beginners, needs minimal care.",
                    cost: "$8",
                    sale: true
                },
                {
                    name: "Succulent Collection",
                    image: "https://plus.unsplash.com/premium_photo-1673468196475-6ff05c0d2910?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHBsYW50fGVufDB8fDB8fHww",
                    description: "Set of 3 beautiful low-maintenance succulents.",
                    cost: "$25",
                    sale: false
                }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart(prev => ({
            ...prev,
            [plant.name]: true
        }));
    };

    return (
        <div className="product-page">
            {plantsArray.map((category, index) => (
                <div key={index} className="category-section">
                    <h2 className="category-title">{category.category}</h2>

                    <div className="product-grid">
                        {category.plants.map((plant, i) => (
                            <div className="product-card" key={i}>
                                {plant.sale && <div className="sale-badge">SALE</div>}

                                <img className="product-img" src={plant.image} alt={plant.name} />
                                <div className="product-name">{plant.name}</div>
                                <div className="product-price">{plant.cost}</div>
                                <div className="product-description">{plant.description}</div>

                                <button
                                    disabled={addedToCart[plant.name]}
                                    className={`add-btn ${addedToCart[plant.name] ? 'added' : ''}`}
                                    onClick={() => handleAddToCart(plant)}
                                >
                                    {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}