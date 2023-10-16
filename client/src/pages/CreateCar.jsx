import React, { useState, useEffect } from 'react';
import './CarCreationPage.css';
import axios from 'axios';
 const CarCreationPage = () => {
    const [selectedInterior, setSelectedInterior] = useState(null);
    const [selectedRoof, setSelectedRoof] = useState(null);
    const [selectedWheels, setSelectedWheels] = useState(null);
    const [isConvertible, setIsConvertible] = useState(false);
    const [carName, setCarName] = useState("");
    const [totalPrice, setTotalPrice] = useState(65000);  
    const [errorMessage, setErrorMessage] = useState("");   

    const handleRoofSelection = (src) => {
        console.log([roofs[roofs.length - 1].src, roofs[roofs.length - 2].src]);
        const isLastTwoRoof = [roofs[roofs.length - 1].src, roofs[roofs.length - 2].src].includes(src.src);
        
        if (!isConvertible && isLastTwoRoof) {
            setErrorMessage("Sorry, you can't put that roof on a coupe 😔\n\nPlease choose another option or check Convertible to switch to a convertible.\n\nUGH, OK FINE 🙄");
            return;  // Prevent selection
        } else {
            setSelectedRoof(src);
            setErrorMessage("");  
        }
    };

const interiors = [
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/gsj.png', name: 'Leather', price: 2000 },
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/gph.png', name: 'Fabric', price: 1500 },
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/ga7.png', name: 'Velvet', price: 1700 },
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/gc5.png', name: 'Alcantara', price: 2200 },
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/gs7.png', name: 'Synthetic', price: 1400 },
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/gd0.png', name: 'Linen', price: 1800 },
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/gkz.png', name: 'Denim', price: 1600 },
];

const roofs = [
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/cm9.png', name: 'Sunroof', price: 1000 },
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/d86.png', name: 'Hardtop', price: 500 },
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/d84.png', name: 'Targa', price: 1100 },
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/c2z.png', name: 'Convertible Soft', price: 1200 },
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/cc3.png', name: 'Glass Roof', price: 900 },
];

const wheels = [
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/q8s.png', name: 'Alloy', price: 1200 },
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/q99.png', name: 'Steel', price: 800 },
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/q9a.png', name: 'Matte Finish', price: 1300 },
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/q8p.png', name: 'Glossy Finish', price: 1100 },
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/q8t.png', name: 'Diamond Cut', price: 1400 },
    { src: 'https://images-visualizer.gm.com/swatches/chevrolet/us/b2c/en/2023/corvette-stingray/small/q9i.png', name: 'Chrome', price: 1500 },
];

    const convertiblePrice = 2500;

    useEffect(() => {
        let price = 65000;
        if (selectedInterior) {
            price += interiors.find(item => item.src === selectedInterior.src).price;
        }
        if (selectedRoof) {
            price += roofs.find(item => item.src === selectedRoof.src).price;
        }
        if (selectedWheels) {
            price += wheels.find(item => item.src === selectedWheels.src).price;
        }
        if (isConvertible) {
            price += convertiblePrice;
        }
        setTotalPrice(price);
    }, [selectedInterior, selectedRoof, selectedWheels, isConvertible]);

const handleCreateCar = async () => {
    if (errorMessage) {
         alert("Please fix the errors before proceeding.");
        return;
    }

    try {                    

console.log(selectedRoof);

        const requestBody = {
            name : carName ? carName : null , 
            roof: selectedRoof ? selectedRoof : null,
            wheels: selectedWheels ? selectedWheels : null,
            interior: selectedInterior ? selectedInterior : null,
            convertible: isConvertible
        };

        const response = await axios.post('http://localhost:3001/cars', requestBody);

         console.log(response.data);  
        alert("Car added successfully!");

    } catch (error) {
         console.error("Error adding car:", error);
        alert("There was an error adding the car. Please try again.");
    }
};

    return (
        <div className="car-creation-page">
            <h1>Create Your Car</h1>
            
            <input
                type="text"
                placeholder="Enter Car Name"
                value={carName}
                onChange={e => setCarName(e.target.value)}
            />

            <div className="option-section">
                <h2>Interior</h2>
                <div className="option-images">
                    {interiors.map((item, index) => (
                        <div key={index} onClick={() => {console.log(item);  setSelectedInterior({src : item.src , name : item.name , price : item.price})} } className={(selectedInterior && item.src === selectedInterior.src) ? 'selected' : ''}>
                            <img src={item.src} alt={item.name} />
                            <span>{item.name}: ${item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
            
             <div className="option-section">
                <h2>Roof</h2>
                <div className="option-images">
                    {roofs.map((item, index) => (
                        <div key={index} onClick={() => handleRoofSelection({src : item.src , name : item.name , price : item.price})} className={selectedRoof && (item.src === selectedRoof.src ) ? 'selected' : ''}>
                            <img src={item.src} alt={item.name} />
                            <span>{item.name}: ${item.price}</span>
                        </div>
                    ))}
                </div>
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}

            
            <div className="option-section">
                <h2>Wheels</h2>
                <div className="option-images">
                    {wheels.map((item, index) => (
                        <div key={index} onClick={() => setSelectedWheels({src : item.src , name : item.name , price : item.price})} className={ selectedWheels && (item.src === selectedWheels.src )? 'selected' : ''}>
                            <img src={item.src} alt={item.name} />
                            <span>{item.name}: ${item.price}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="option-section">
                <h2>Convertible</h2>
                <input type="checkbox" checked={isConvertible} onChange={() => setIsConvertible(!isConvertible)} />
                <span>Convertible: ${convertiblePrice}</span>
            </div>
            
            <h2>Total Price: ${totalPrice}</h2>

            <button onClick={handleCreateCar}>Create Car</button>
        </div>
    );
};

export default CarCreationPage;
