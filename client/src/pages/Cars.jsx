import React, { useState, useEffect } from 'react';
import './Cars.css';
import Card from '../components/Card';
import axios from 'axios';

const Cars = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                console.log();
                const response = await axios.get('http://localhost:3001/cars');
                 console.log(response);
                setCars(response.data);
            } catch (error) {
                console.error("Error fetching cars:", error);
            }
        };

        fetchCars();
    }, []);
    
    return (
        <div className="Cars">
            <main>
                {
                    cars && cars.length > 0 ?
                    cars.map((car, index) => (
                        <Card 
                            name={car.name}
                            key={index}
                            wheels={car.wheels}
                            roof={car.roof}
                            interior={car.interior}
                            id={car.id} 
                        />
                    )) : <h3 className="noResults">{'No Cars Available 😞'}</h3>
                }
            </main>
        </div>  
    );
}

export default Cars;
