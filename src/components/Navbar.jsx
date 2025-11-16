import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ onCartClick }) {
    const navigate = useNavigate();

    const totalItems = useSelector((state) =>
        state.cart.items.reduce((total, item) => total + item.quantity, 0)
    );

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <nav style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px",
            background: "#e0ffe0"
        }}>
            <h2
                style={{ cursor: "pointer" }}
                onClick={handleLogoClick}
            >
                Paradise Nursery
            </h2>

            <div
                style={{ cursor: "pointer" }}
                onClick={onCartClick}
            >
                🛒 Cart ({totalItems})
            </div>
        </nav>
    );
}