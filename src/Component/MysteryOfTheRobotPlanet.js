import React from 'react';
import './New.css';
import '../Card.css';

const MysteryOfTheRobotPlanet = ({ data }) => {
  const { Title, Image, Wordexplore } = data;

  return (
    <div className="container1">
      <div className="mystery-container1">
        <img src={`https://ik.imagekit.io/dev24/${Image[0]}`} alt={Title} className="card-image1" />
        <h1 className="card-title1">{Title}</h1>
      </div>

      <div className="word-container1">
        {Wordexplore.map((word) => (
          <div key={word._id} className="word-card1">
            <img src={`https://ik.imagekit.io/dev24/${word.Storyimage[0]}`} alt={word.Storytitle} className="word-image1" />
            <h3 className="word-title1">{word.Storytitle}</h3>
            <p className="word-text1">{word.Storyitext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MysteryOfTheRobotPlanet;

