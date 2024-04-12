import React from 'react';
import '../New.css';

const MysteryOfTheRobotPlanet = ({ data }) => {
  const { Title, Image, Wordexplore } = data;

  return (
    <div className="container">
      <div className="mystery-container">
        <img src={`https://ik.imagekit.io/dev24/${Image[0]}`} alt={Title} className="card-image1" />
        <h1 className="card-title1">{Title}</h1>
      </div>

      <div className="word-container">
        {Wordexplore.map((word) => (
          <div key={word._id} className="word-card1">
            <img src={`https://ik.imagekit.io/dev24/${word.Storyimage[0]}`} alt={word.Storytitle} className="word-image" />
            <h3 className="word-title">{word.Storytitle}</h3>
            <p className="word-text">{word.Storyitext}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MysteryOfTheRobotPlanet;

