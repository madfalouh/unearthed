import React from 'react';
import './Card.css';
import axios from 'axios';

const Card = ({ name, roof, wheels, interior, id }) => {
 
    const basePrice = 6500;
    const roofPrice = roof ? parseInt(roof.price) : 0;
    const wheelsPrice = wheels ? parseInt(wheels.price) : 0;
    const interiorPrice = interior ? parseInt(interior.price) : 0;

    const totalPrice = basePrice + roofPrice + wheelsPrice + interiorPrice;


    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3001/cars/${id}`);
            alert('Car deleted successfully!');
          window.location.reload();
        } catch (error) {
            console.error("Error deleting car:", error);
            alert('Error deleting car. Please try again.');
        }
    };

    return (
        <div className="card">
            <div className='top-container' style={{ backgroundImage: `url(${roof?.image || wheels?.image || interior?.image})` }}></div>
            <div className='bottom-container'>
                <p>🚗 name: {name}</p>
                {roof && <p>🏠 Roof: {roof.name || roof.type} - ${roof.price}</p>}
                {wheels && <p>🔘 Wheels: {wheels.name || wheels.type} - ${wheels.price}</p>}
                {interior && <p>🛋 Interior: {interior.name || interior.type} - ${interior.price}</p>}
                <h3>Total Price: ${totalPrice}</h3>
                <button onClick={() => {
                    window.location.href = `/cars/${id}`;
                    console.log(`Viewing details for car with ID ${id}`);
                }}>
                    DETAILS
                </button>

                <button onClick={handleDelete}>
                    DELETE
                </button>
            </div>
        </div>
    );
}

export default Card;
