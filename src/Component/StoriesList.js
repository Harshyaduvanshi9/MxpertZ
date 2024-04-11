import React, { useState, useEffect } from 'react';
import Card from './Card';

const StoriesList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('https://child.onrender.com/api/sciencefiction');
        const data = await response.json();
        setStories(data);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };

    fetchStories();
  }, []);

  return (
    <div className="card-container">
      
      <div className="cards">
        {stories.map((story, index) => (

          
          <Card
            key={index}
            title={story.Title}
            image={`https://ik.imagekit.io/dev24/${story.Image[0]}`}
            status={story.Status}
            storyId={story._id}
          />
        ))}
      </div>
    </div>
  );
};

export default StoriesList;

