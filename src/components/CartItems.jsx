import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';

export default function CartItems({ cart, onContinueShopping }) {

    const dispatch = useDispatch();

    const calculateTotalAmount = () => {
        let total = 0;
        cart.forEach(item => {
            const price = parseFloat(item.cost.substring(1));
            total += price * item.quantity;
        });
        return total.toFixed(2);
    };

    const handleIncrement = (item) => {
        dispatch(updateQuantity({
            name: item.name,
            quantity: item.quantity + 1
        }));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({
                name: item.name,
                quantity: item.quantity - 1
            }));
        } else {
            dispatch(removeItem(item.name));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Carrito</h2>

            {cart.map((item, index) => (
                <div key={index} style={{
                    border: "1px solid #ccc", padding: 10, marginBottom: 10
                }}>
                    <img src={item.image} width="120" />
                    <h3>{item.name}</h3>
                    <p>Precio: {item.cost}</p>
                    <p>Cantidad: {item.quantity}</p>

                    <button onClick={() => handleIncrement(item)}>+</button>
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <button onClick={() => handleRemove(item)}>Eliminar</button>

                    <h4>
                        Subtotal: $
                        {(parseFloat(item.cost.substring(1)) * item.quantity).toFixed(2)}
                    </h4>
                </div>
            ))}

            <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

            <button onClick={onContinueShopping}>Continue Shopping</button>
            <button onClick={() => alert("Pago próximamente")}>Checkout</button>
        </div>
    );
}
