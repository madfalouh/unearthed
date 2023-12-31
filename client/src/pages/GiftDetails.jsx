import React, { useState, useEffect } from "react";
import "./GiftDetails.css";
import { useParams } from "react-router-dom";

const GiftDetails = () => {
  const { id } = useParams();

  const [gift, setGift] = useState({
    id: 0,
    name: "",
    pricepoint: "",
    audience: "",
    image: "",
    description: "",
    submittedby: "",
    submittedon: "",
  });

  useEffect(() => {
    const fetchGiftById = async () => {
      try {
        const response = await fetch(`/gifts/${id}`);
        console.log(response);

        if (!response.ok) {
          throw new Error("Failed to fetch gift details");
        }

        const data = await response.json();

        setGift(data);
      } catch (error) {
        console.error("Error fetching gift details:", error);
      }
    };

    fetchGiftById();
  }, [id]);

  return (
    <div className="GiftDetails">
      <main id="gift-content" className="gift-info">
        <div className="image-container">
          <img id="image" src={gift.image} alt={gift.name} />
        </div>
        <div className="gift-details">
          <h2 id="name">{gift.name}</h2>
          <p id="submittedBy">{"Submitted By: " + gift.submittedby}</p>
          <p id="pricePoint">{"Price: " + gift.pricepoint}</p>
          <p id="audience">{"Great For: " + gift.audience}</p>
          <p id="description">{gift.description}</p>
        </div>
      </main>
    </div>
  );
};

export default GiftDetails;
