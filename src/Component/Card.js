
import React from 'react';
import '../Card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, image, status,storyId }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <button className="card-status-button">{status}</button>
        <Link to={`/stories/${storyId}`}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;

